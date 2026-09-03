import theme from "./theme.js"
import keys from "./keys.js"
import searchEngines from "./search-engines.js"

export default {
  settings: {
    hintAlign: "left",
    hintCharacters: "qwertasdfgzxcvb",
    omnibarSuggestionTimeout: 500,
    richHintsForKeystroke: 1,
    defaultSearchEngine: "go",
    stealFocusOnLoad: false,
    focusFirstCandidate: true,
    tabsThreshold:  0,
    tabsMRUOrder:  true,
    omnibarSuggestion: true,
    focusFirstCandidate: true,
    enableEmojiInsertion: true,
    startToShowEmoji: true,
//    aceKeybindings: "emacs", need to see if we can override stuff in vivaldi keybindi ngs first
    theme,
  },

  keys,
  searchEngines,

  // Leader for site-specific mappings
  siteleader: "<Space>",

  // Leader for OmniBar searchEngines
  searchleader: "a",

  // Array containing zero or more log levels to enable: log, warn, error
  logLevels: [
    "log",
    "warn",
    "error",
  ],
}
