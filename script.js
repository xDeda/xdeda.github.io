(function() {
    let titles = [];
    let secrets = {};
    let catModeOn = false;
    let currentTitlesShown = null;

    function $ify(el) {
        if (!el) {
            return el;
        }

        el.appendText = function(text) {
            const lines = text.split(/\r?\n/);
            let first = true;

            lines.forEach(function(line) {
                if (first) {
                    first = false;
                } else {
                    el.appendChild(document.createElement('br'));
                }

                el.appendChild(document.createTextNode(line));
            });

            return el;
        };

        el.append = function() {
            for (let i = 0; i < arguments.length; ++i) {
                if (typeof(arguments[i]) === 'string') {
                    el.appendText(arguments[i]);
                } else {
                    el.appendChild(arguments[i]);
                }
            }

            return el;
        };

        el.clearChildren = function() {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }

            return el;
        };

        return el;
    }

    // $(arg, [attributes,] [child, [child, [...]]])
    function $(arg) {
        if (arg.slice(0, 1) == '.') {
            return Array.from(document.getElementsByClassName(arg.slice(1))).map($ify);
        } else if (arg.slice(0, 1) == '#') {
            return $ify(document.getElementById(arg.slice(1)));
        }

        const el = document.createElement(arg);

        for (let i = 1; i < arguments.length; ++i) {
            const obj = arguments[i];

            if (obj) {
                if ((typeof(obj) === 'object') && !(obj instanceof Element) && !obj.append) {
                    Object.keys(obj).forEach(function(key) {
                        el.setAttribute(key, obj[key]);
                    });
                } else {
                    el.append(obj);
                }
            }
        }

        return el;
    }

    function getHash() {
        return decodeURI(location.hash.slice(1).toLowerCase());
    }

    function setSecretMessage(message) {
        const span = $('#secret-message');

        if (message.length > 0) {
            span.clearChildren();
            span.append(' | ' + message);
        } else {
            span.clearChildren();
        }
    }

    // Fade all children of el out and then run callback
    function fadeChildrenOut(el, callback) {
        if (el.childNodes.length === 0) {
            callback();
            return;
        }

        // Fade out animation length is constant, so it's fine to just call it on the first element's animationend
        let callbackSet = false;

        for (let i = 0; i < el.childNodes.length; ++i) {
            if (!callbackSet) {
                el.childNodes[i].addEventListener('animationend', function() {
                    el.clearChildren();
                    callback();
                });

                callbackSet = true;
            }

            el.childNodes[i].classList.add('fade-out');
        }
    }

    function showTitles(titles) {
        const content = $('#content');

        titles.forEach(function(title) {
            const titleSection = $('section');
            const copySpan = $('span',
                {
                    'class': 'copy-span'
                },
                $('a',
                    {
                        'class': 'copy-link',
                        'href': '#',
                        'title': 'Click to copy'
                    },
                    '/title ' + title.id
                )
            );

            copySpan.onclick = (function(copySpan) {
                return function() {
                    // https://stackoverflow.com/a/987376
                    const rng = document.createRange();
                    rng.selectNodeContents(copySpan);

                    const sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(rng);

                    document.execCommand('copy');

                    sel.removeAllRanges();

                    const popup = $('span',
                        {
                            'class': 'popup'
                        },
                        'Copied'
                    );

                    popup.onanimationend = function() {
                        popup.parentNode.removeChild(popup);
                    };

                    copySpan.appendChild(popup);

                    return false;
                };
            })(copySpan, title.id);

            let titleText = title.name;

            if (title.altName) {
                titleText = title.altName + ' / ' + titleText;
            }

            if (catModeOn) {
                titleText = titleText.replace('Mouse', 'Cat')
                    .replace('mouse', 'cat')
                    .replace('Maus', 'Katze')
                    .replace('maus', 'katze')
                    .replace('Souris', 'Chat')
                    .replace('souris', 'chat');
            }

            titleSection.append(
                $('p',
                    $('span', { 'class': 'title' }, titleText),
                    ' ',
                    copySpan
                )
            );

            let description;

            if (title.id === 138) {
                description = $('a',
                    {
                        'href': 'http://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    },
                    title.description
                );
            } else {
                description = title.description;
            }

            titleSection.append(
                $('p',
                    { 'class': 'title-description' },
                    description
                )
            );

            content.append(titleSection);
        });

        currentTitlesShown = titles;
    }

    function showHelp() {
        currentTitlesShown = null;

        const content = $('#content');

        fadeChildrenOut(content, function() {
            content.append(
                $('h2', 'Search for a title using the box to the right of the logo.'),
                $('ul',
                    $('li', 'Type part of a title or type the title number.'),
                    $('li', 'Click ', $('span', { 'class': 'copy-link' }, '/title #'), ' to copy.'),
                    $('li', 'The links below the logo will show you titles in that category.')
                ),
                $('p', 'There might be a few hidden features, as well.')
            );
        });
    }

    function showCredits() {
        currentTitlesShown = null;

        const content = $('#content');

        fadeChildrenOut(content, function() {
            content.append(
                $('h2', 'Creator'),
                $('p', 'Dedax'),
                $('h2', 'Banner'),
                $('p', 'Jacobmood'),
                $('h2', 'Icons'),
                $('p', 'EmojiOne 2.0'),
                $('h2', 'Suggestions from'),
                $('p', 'Elizalove, Levelup, Epilepsy, Imaginist')
            );
        });
    }

    function showAllTitles() {
        fadeChildrenOut($('#content'), function() {
            showTitles(titles);
        });
    }

    function showRandomTitle() {
        const idx = Math.floor(Math.random() * titles.length);

        fadeChildrenOut($('#content'), function() {
            showTitles(titles.slice(idx, idx + 1));
        });
    }

    function showMatches(query) {
        const content = $('#content');

        query = query.toLowerCase().trim();

        if (query === '' || (query.length < 2) && isNaN(query)) {
            return;
        }


        if (query === atob('YnV0dHM=')) {
            document.body.classList.add('zoop');
            return;
        } else if (query === atob('YW15')) {
            if (!$('#m')) {
                fadeChildrenOut(content, function() {
                    content.appendChild($('span', { 'id': 'm' }, $('span', { 'id': 'n' })));
                });
            }
            return;
        } else if (secrets && secrets[query]) {
            setSecretMessage(secrets[query]);
            return;
        }

        setSecretMessage('');

        const matches = titles.filter(function(title) {
            return (
                title.name.toLowerCase().includes(query) ||
                (title.altName && title.altName.toLowerCase().includes(query)) ||
                title.id.toString().includes(query)
            );
        });

        fadeChildrenOut(content, function() {
            if (matches.length > 0) {
                showTitles(matches);
            } else {
                content.append($('p', 'Nobody here but us chickens...'));
            }
        });
    }

    function showTag(tag) {
        const matches = titles.filter(function(title) {
            return title.tags.includes(tag);
        });

        fadeChildrenOut($('#content'), function() {
            showTitles(matches);
        });
    }

    function navigate() {
        const hash = getHash();

        if (hash === 'credits') {
            showCredits();
        } else if (hash === 'all') {
            showAllTitles();
        } else if (hash === 'random') {
            showRandomTitle();
        } else if (hash.slice(0, 4) === 'tag/') {
            const tag = hash.slice(4);

            showTag(tag);
        } else {
            showHelp();
        }
    }

    function createFooter() {
        const footer = $('#footer');

        footer.append($('h2', 'Super cool links', $('span', { 'id': 'secret-message' } )));

        $('#header-link').onclick = function() {
            if (getHash() === 'help') {
                showHelp();
            }
        };

        const helpLink = $('a', { 'href': '#help' }, 'Help');
        const creditsLink = $('a', { 'href': '#credits' }, 'Credits');

        helpLink.onclick = function() {
            if (getHash() === 'help') {
                showHelp();
            }
        };

        creditsLink.onclick = function() {
            if (getHash() === 'credits') {
                showCredits();
            }
        };

        const links = $('ul');
        links.append($('li', $('a', { 'href': 'https://transformice.com/' }, 'transformice.com')));
        links.append($('li', $('a', { 'href': 'https://instagram.com/jegerniclas/' }, 'Creator\'s Instagram')));
        links.append($('li', helpLink));
        links.append($('li', creditsLink));
        links.append($('li', $('a', { 'href': 'https://github.com/xDeda/xdeda.github.io' }, 'GitHub Repository')));

        footer.append(links);

        // Add cat mode button
        const mouseIcon = 'mouse.png';
        const catIcon = 'cat.png';

        const catButton = $('img',
            {
                'src': mouseIcon,
                'alt': 'cat mode',
                'width': 32,
                'height': 32
            }
        );

        const catLink = $('a',
            {
                'href': '#',
                'id': 'cat-link'
            },
            catButton
        );

        catLink.onclick = function() {
            if (catModeOn === false) {
                catModeOn = true;
                catButton.src = catIcon;
            } else {
                catModeOn = false;
                catButton.src = mouseIcon;
            }

            if (currentTitlesShown) {
                fadeChildrenOut($('#content'), function() {
                    showTitles(currentTitlesShown);
                });
            }

            return false;
        };

        footer.appendChild(catLink);
    }

    function loadData(titles, listedTags) {
        const header = $('#header');
        const nav = $('#nav');

        // Add search box
        const searchInput = $('input',
            {
                'id': 'search',
                'type': 'text',
                'placeholder': 'search for title'
            }
        );

        const invisibleKeys = [
            'Alt',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'CapsLock',
            'Control',
            'End',
            'Escape',
            'Home',
            'NumLock',
            'PageDown',
            'PageUp',
            'PrintScreen',
            'ScrollLock',
            'Shift',
            'Tab'
        ];

        searchInput.addEventListener('keyup', function(event) {
            if (invisibleKeys.includes(event.key)) {
                return;
            }

            showMatches(searchInput.value);
        });

        searchInput.addEventListener('paste', function() {
            showMatches(searchInput.value);
        });

        header.insertBefore(searchInput, header.childNodes[2]);

        // Add links to tags
        function addLink(text, hash, onclick) {
            const link = $('a', { 'href': '#' + hash }, text);
            link.onclick = onclick;
            nav.append($('li', link));
        }

        addLink('All Titles', 'all', showAllTitles);
        addLink('Random', 'random', showRandomTitle);

        listedTags.forEach(function(tag) {
            addLink(tag, 'tag/' + tag.toLowerCase(), (function() {
                return function() {
                    showTag(tag.toLowerCase());
                };
            })(tag));
        });

        if (getHash() === '') {
            showHelp();
        } else {
            navigate();
        }
    }

    function init() {
        const content = $('#content');

        content.append($('p', 'Loading...'));

        function showErrorMessage() {
            fadeChildrenOut(content, function() {
                content.append($('p', 'An error occurred while attempting to retrieve the titles. Please try refreshing the page.'));
            });
        }

        createFooter();

        // Load title data
        const req = new XMLHttpRequest();

        req.onload = function() {
            if (req.status < 400) {
                let configParsed = false;
                let listedTags = [];

                try {
                    const config = JSON.parse(req.response);

                    titles = config.titles; // Global
                    listedTags = config.listedTags;
                    secrets = config.secrets; // Global

                    configParsed = true;
                } catch (e) {
                    showErrorMessage();
                }

                if (configParsed) {
                    loadData(titles, listedTags);
                }
            } else {
                showErrorMessage();
            }
        };

        req.onerror = showErrorMessage;

        req.open('GET', 'config.json');
        req.send();
    }

    window.onload = init;
    window.onhashchange = navigate;
})();
