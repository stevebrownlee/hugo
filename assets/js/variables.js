// global variables;
const doc = document.documentElement;
const toggleId = 'toggle';
const showId = 'show';
const menu = 'menu';
const active = 'active';
// rootURL must end with '/' for relative URLs to work properly
const rootURL = '{{ strings.TrimSuffix "/" .Site.BaseURL }}/';
const searchFieldClass = '.search_field';
const searchClass = '.search';
const goBackClass = 'button_back';
const lineClass = '.line';

// config defined values
const codeBlockConfig = JSON.parse('{{ partial "functions/getCodeConfig" . }}');
const iconsPath = `{{ partialCached "functions/getIconPath" . }}`;

// values defined under config/_default/params.toml
let otherSearchableFields = '{{ delimit (default slice site.Params.otherSearchableFields) ", " }}'

if(otherSearchableFields.length > 2) {
  otherSearchableFields = otherSearchableFields
    .split(",")
    .map(search_value => search_value.toLowerCase().trim());
} else {
  otherSearchableFields = [];
}

// defined in i18n / translation files
const quickLinks = '{{ T "quick_links" }}';
const searchResultsLabel = '{{ T "search_results_label" }}';
const shortSearchQuery = '{{ T "short_search_query" }}'
const typeToSearch = '{{ T "type_to_search" }}';
const noMatchesFound = '{{ T "no_matches" }}';
