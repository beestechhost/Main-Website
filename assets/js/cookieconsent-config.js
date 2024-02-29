import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar inline",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: true
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Functionality Cookies",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Advertisement Cookies",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                        }
                    ]
                }
            },
            fr: {
                consentModal: {
                    title: "Bonjour voyageur, c'est l'heure des cookies!",
                    description: "Notre site utilise des cookies pour permettre son bon fonctionnement. C'est à dire notamment des cookies à des fins analytiques ou encore d'éventuelles publicités. Veuillez noter que nous utilisons des cookies, uniquement pour vous proposer une expérience personnalisée mais aussi pour nous améliorer.",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    showPreferencesBtn: "Gérer les préférences",
                    footer: "<a href=\"https://beestech.fr/politique-de-confidentialite\">Politique de confidentialité</a>\n<a href=\"https://beestech.fr/conditions-generales-d'utilisation\">Conditions générales d'utilisation</a>"
                },
                preferencesModal: {
                    title: "Préférences de cookies",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    savePreferencesBtn: "Sauvegarder les préférences",
                    closeIconLabel: "Fermer la modale",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Utilisation des Cookies",
                            description: "Vous voulez que nous respectons vos choix, en matière de cookies ? Configurer dès maintenant, ce que nous pouvons utiliser ou non."
                        },
                        {
                            title: "Cookies Strictement Nécessaires <span class=\"pm__badge\">Toujours Activé</span>",
                            description: "Ces cookies ne peuvent pas être désactivé, ils servent au bon fonctionnement du site. Cela peut notamment être utilisé pour une préférence de langage ou d'une palette de couleurs (ex: thème sombre/clair)",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies de Fonctionnalités",
                            description: "Ces cookies nous servent par exemple à afficher des élèments externes sur notre site. Notamment les demandes d'avis par rapport à nos services",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Cookies Analytiques",
                            description: "Ces cookies sont utilisées à des fins analytiques. Ne vous inquiétez pas tout est anonymatisé. Ils nous permettent de nous améliorer, de déceler certains problèmes sur notre site.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Cookies Publicitaires",
                            description: "Ces cookies sont utilisés pour vous proposer une expérience publicitaire personnalisée. Attention, cela ne signifie pas que les pubs seront désactivées.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Plus d'informations",
                            description: "Pour plus d'informations, veuillez nous contacter à cette adresse e-mail <a class=\"cc__link\" href=\"mailto:contact@beestech.fr\">contact@beestech.fr</a>."
                        }
                    ]
                }
            }
        }
    }
});