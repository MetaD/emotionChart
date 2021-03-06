// A list of emotions and their instructions
var EMOTIONS = [
	// The first character of an emotion must be capitalized! (for the json-csv parser to work)
	['Affection', ''],	// ['Title', 'Subtitle']
	['Disgust', ''],
	['Intrigue', ''],
	['Relaxation', ''],
	// ['Agitation', ''],
	// ['Distrust', ''],
	// ['Judgment', ''],
	// ['Satisfaction', ''],
	// ['Alarm', ''],
	// ['Dominance', ''],
	// ['Laziness', ''],
	// ['Self-consciousness', ''],
	// ['Anticipation', ''],
	// ['Drunkenness', ''],
	// ['Lethargy', ''],
	// ['Self-pity', ''],
	// ['Attention', ''],
	// ['Contemplation', ''],
	// ['Lust', ''],
	// ['Seriousness', ''],
	// ['Awareness', ''],
	// ['Earnestness', ''],
	// ['Nervousness', ''],
	// ['Skepticism', ''],
	// ['Awe', ''],
	// ['Ecstasy', ''],
	// ['Objectivity', ''],
	// ['Sleepiness', ''],
	// ['Belief', ''],
	// ['Embarrassment', ''],
	// ['Opinion', ''],
	// ['Stupor', ''],
	// ['Cognition', ''],
	// ['Exaltation', ''],
	// ['Patience', ''],
	// ['Subordination', ''],
	// ['Consciousness', ''],
	// ['Exhaustion', ''],
	// ['Peacefulness', ''],
	// ['Thought', ''],
	// ['Craziness', ''],
	// ['Fatigue', ''],
	// ['Pensiveness', ''],
	// ['Trance', ''],
	// ['Curiosity', ''],
	// ['Friendliness', ''],
	// ['Pity', ''],
	// ['Transcendence', ''],
	// ['Decision', ''],
	// ['Imagination', ''],
	// ['Planning', ''],
	// ['Uneasiness', ''],
	// ['Desire', ''],
	// ['Insanity', ''],
	// ['Playfulness', ''],
	// ['Weariness', ''],
	// ['Disarray', ''],
	// ['Inspiration', ''],
	// ['Reason', ''],
	// ['Worry', '']
];

var RANDOMIZE = true;

var INCOMPLETE_ALERT = 'Please rate the emotional intensity in the second month.';
// var WRONG_ID_ALERT = "Invalid ID";
var CLOSE_WINDOW_ALERT = "Do you want to leave this page? Your progress will not be saved.";

// Y axis range
var MAX_Y = 100;
var MIN_Y = -10;

// Valid ID length
var ID_LENGTH = 5;

// Change this only if the domain url has changed
var DOMAIN = '://metad.github.io';
