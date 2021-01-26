/********
 * Data *
 ********/

/********
 * Section: Data used in the stats page to show not yet purchased updates. See CM.Disp.CreateStatsMissDisp() */

CM.Data.Fortunes = [
	'Fortune #001', 
	'Fortune #002', 
	'Fortune #003', 
	'Fortune #004', 
	'Fortune #005', 
	'Fortune #006', 
	'Fortune #007', 
	'Fortune #008', 
	'Fortune #009', 
	'Fortune #010', 
	'Fortune #011', 
	'Fortune #012', 
	'Fortune #013', 
	'Fortune #014', 
	'Fortune #015', 
	'Fortune #016', 
	'Fortune #017', 
	'Fortune #018', 
	'Fortune #100', 
	'Fortune #101', 
	'Fortune #102', 
	'Fortune #103', 
	'Fortune #104'
];
CM.Data.HalloCookies = ['Skull cookies', 'Ghost cookies', 'Bat cookies', 'Slime cookies', 'Pumpkin cookies', 'Eyeball cookies', 'Spider cookies'];
CM.Data.ChristCookies = ['Christmas tree biscuits', 'Snowflake biscuits', 'Snowman biscuits', 'Holly biscuits', 'Candy cane biscuits', 'Bell biscuits', 'Present biscuits'];
CM.Data.ValCookies = ['Pure heart biscuits', 'Ardent heart biscuits', 'Sour heart biscuits', 'Weeping heart biscuits', 'Golden heart biscuits', 'Eternal heart biscuits', 'Prism heart biscuits'];
CM.Data.PlantDrops = ['Elderwort biscuits', 'Bakeberry cookies', 'Duketater cookies', 'Green yeast digestives', 'Wheat slims', 'Fern tea', 'Ichor syrup']

/********
 * Section: Data for the various scales used by CookieMonster */

CM.Data.metric = ['', '', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
CM.Data.shortScale = ['', '', 'M', 'B', 'Tr', 'Quadr', 'Quint', 'Sext', 'Sept', 'Oct', 'Non', 'Dec', 'Undec', 'Duodec', 'Tredec', 'Quattuordec', 'Quindec', 'Sexdec', 'Septendec', 'Octodec', 'Novemdec', 'Vigint', 'Unvigint', 'Duovigint', 'Trevigint', 'Quattuorvigint'];
CM.Data.shortScaleAbbreviated = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 
'UDe', 'DDe', 'TDe', 'QaDe', 'QiDe', 'SxDe', 'SpDe', 'ODe', 'NDe', 'Vi', 
'UVi', 'DVi', 'TVi', 'QaVi', 'QiVi', 'SxVi', 'SpVi', 'OVi', 'NVi', 'Tr', 
'UTr', 'DTr', 'TTr', 'QaTr', 'QiTr', 'SxTr', 'SpTr', 'OTr', 'NTr', 'Qaa', 
'UQa', 'DQa', 'TQa', 'QaQa', 'QiQa', 'SxQa', 'SpQa', 'OQa', 'NQa', 'Qia', 
'UQi', 'DQi', 'TQi', 'QaQi', 'QiQi', 'SxQi', 'SpQi', 'OQi', 'NQi', 'Sxa',
'USx', 'DSx', 'TSx', 'QaSx', 'QiSx', 'SxSx', 'SpSx', 'OSx', 'NSx', 'Spa', 
'USp', 'DSp', 'TSp', 'QaSp', 'QiSp', 'SxSp', 'SpSp', 'OSp', 'NSp', 'Oco', 
'UOc', 'DOc', 'TOc', 'QaOc', 'QiOc', 'SxOc', 'SpOc', 'OOc', 'NOc', 'Noa',
'UNo', 'DNo', 'TNo', 'QaNo', 'QiNo', 'SxNo', 'SpNo', 'ONo', 'NNo', 'Ct', 
'UCt']

/********
 * Section: Two array's containing all Config groups and their to-be displayed title */

CM.ConfigGroups = {
	BarsColors: "Bars/Colors",
	Calculation: "Calculation",
	Notification: "Notification",
	Tooltip: "Tooltips",
	Statistics: "Statistics",
	Notation: "Notation",
	Miscellaneous: "Miscellaneous"
}

CM.ConfigGroupsNotification = {
	NotificationGC: "Golden Cookie",
	NotificationFC: "Fortune Cookie",
	NotificationSea: "Season Special",
	NotificationGard: "Garden Tick",
	NotificationMagi: "Full Magic Bar",
	NotificationWrink: "Wrinkler",
	NotificationWrinkMax: "Maximum Wrinklers",
}

/********
 * Section: An array (CM.ConfigData) containing all Config options and an array of default settings */

/**
 * This includes all options of CookieMonster and relevant data
 * Each individual option-array in the has the following items
 * @item {string}			type	The type of option (bool(ean), vol(ume), url or color)
 * @item {string}			group	The options-group the option belongs to
 * @item {[string, ...]}	label	A list of the various configurations of the option
 * @item {string}			desc 	Description to be used in options menu
 * @item {boolean}			toggle	Whether it should be displayed as a grey/white toggle in the options menu
 * @item {function}			func	A function to be called when the option is toggled
 */
// Barscolors
CM.ConfigData.BotBar = {type: 'bool', group: 'BarsColors', label: ['Bottom Bar OFF', 'Bottom Bar ON'], desc: 'Building Information', toggle: true, func: function() {CM.Disp.ToggleBotBar();}};
CM.ConfigData.TimerBar = {type: 'bool', group: 'BarsColors', label: ['Timer Bar OFF', 'Timer Bar ON'], desc: 'Timers of Golden Cookie, Season Popup, Frenzy (Normal, Clot, Elder), Click Frenzy', toggle: true, func: function() {CM.Disp.ToggleTimerBar();}};
CM.ConfigData.TimerBarPos = {type: 'bool', group: 'BarsColors', label: ['Timer Bar Position (Top Left)', 'Timer Bar Position (Bottom)'], desc: 'Placement of the Timer Bar', toggle: false, func: function() {CM.Disp.ToggleTimerBarPos();}};
CM.ConfigData.SortBuildings = {type: 'bool', group: 'BarsColors', label: ['Sort Buildings: Default', 'Sort Buildings: PP'], desc: 'Sort the display of buildings in either default order or by PP', toggle: false,	func: function () { CM.Disp.UpdateBuildings();}};
CM.ConfigData.SortUpgrades = {type: 'bool', group: 'BarsColors', label: ['Sort Upgrades: Default', 'Sort Upgrades: PP'], desc: 'Sort the display of upgrades in either default order or by PP', toggle: false, func: function () { CM.Disp.UpdateUpgrades();}};
CM.ConfigData.BuildColor = {type: 'bool', group: 'BarsColors', label: ['Building Colors OFF', 'Building Colors ON'], desc: 'Color code buildings', toggle: true, func: function() {CM.Disp.UpdateBuildings();}};
CM.ConfigData.BulkBuildColor = {type: 'bool', group: 'BarsColors', label: ['Bulk Building Colors (Single Building Color)', 'Bulk Building Colors (Calculated Bulk Color)'], desc: 'Color code bulk buildings based on single buildings color or calculated bulk value color', toggle: false, func: function() {CM.Disp.UpdateBuildings();}};
CM.ConfigData.ColorPPBulkMode = {type: 'bool', group: 'BarsColors', label: ['Color of PP (Compared to Single)', 'Color of PP (Compared to Bulk)'], desc: 'Color PP-values based on comparison with single purchase or with selected bulk-buy mode', toggle: false};
CM.ConfigData.UpBarColor = {type: 'bool', group: 'BarsColors', label: ['Upgrade Colors/Bar OFF', 'Upgrade Colors with Bar ON', 'Upgrade Colors without Bar ON'], desc: 'Color code upgrades and optionally add a counter bar', toggle: false, func: function() {CM.Disp.ToggleUpgradeBarAndColor();}};
CM.ConfigData.Colors = { type: 'color', group: 'BarsColors',
	desc: {
		Blue: 'Color Blue.  Used to show better than best PP building, for Click Frenzy bar, and for various labels', 
		Green: 'Color Green.  Used to show best PP building, for Blood Frenzy bar, and for various labels', 
		Yellow: 'Color Yellow.  Used to show between best and worst PP buildings closer to best, for Frenzy bar, and for various labels', 
		Orange: 'Color Orange.  Used to show between best and worst PP buildings closer to worst, for Next Reindeer bar, and for various labels', 
		Red: 'Color Red.  Used to show worst PP building, for Clot bar, and for various labels', 
		Purple: 'Color Purple.  Used to show worse than worst PP building, for Next Cookie bar, and for various labels', 
		Gray: 'Color Gray.  Used to show negative or infinity PP, and for Next Cookie/Next Reindeer bar', 
		Pink: 'Color Pink.  Used for Dragonflight bar', 
		Brown: 'Color Brown.  Used for Dragon Harvest bar'
	}, 
	func: function() {CM.Disp.UpdateColors();}
};
CM.ConfigData.UpgradeBarFixedPos = {type: 'bool', group: 'BarsColors', label: ['Upgrade Bar Fixed Position OFF', 'Upgrade Bar Fixed Position ON'], desc: 'Lock the upgrade bar at top of the screen to prevent it from moving ofscreen when scrolling', toggle: true, func: function() {CM.Disp.ToggleUpgradeBarFixedPos();}};

// Calculation
CM.ConfigData.CalcWrink = {type: 'bool', group: 'Calculation', label: ['Calculate with Wrinklers OFF', 'Calculate with Wrinklers ON', 'Calculate with Single Fattest Wrinkler ON'], desc: 'Calculate times and average Cookies Per Second with (only the single non-shiny fattest) Wrinklers', toggle: true};
CM.ConfigData.CPSMode = {type: 'bool', group: 'Calculation', label: ['Current Cookies Per Second', 'Average Cookies Per Second'], desc: 'Calculate times using current Cookies Per Second or average Cookies Per Second', toggle: false};
CM.ConfigData.AvgCPSHist = {type: 'bool', group: 'Calculation', label: ['Average CPS for past 10s', 'Average CPS for past 15s', 'Average CPS for past 30s', 'Average CPS for past 1m', 'Average CPS for past 5m', 'Average CPS for past 10m', 'Average CPS for past 15m', 'Average CPS for past 30m'], desc: 'How much time average Cookies Per Second should consider', toggle: false};
CM.ConfigData.AvgClicksHist = {type: 'bool', group: 'Calculation', label: ['Average Cookie Clicks for past 1s', 'Average Cookie Clicks for past 5s', 'Average Cookie Clicks for past 10s', 'Average Cookie Clicks for past 15s', 'Average Cookie Clicks for past 30s'], desc: 'How much time average Cookie Clicks should consider', toggle: false};
CM.ConfigData.ToolWarnBon = {type: 'bool', group: 'Calculation', label: ['Calculate Tooltip Warning With Bonus CPS OFF', 'Calculate Tooltip Warning With Bonus CPS ON'], desc: 'Calculate the warning with or without the bonus CPS you get from buying', toggle: true};

// Notification
CM.ConfigData.GCNotification = {type: 'bool', group: 'NotificationGC', label: ['Notification OFF', 'Notification ON'], desc: 'Create a notification when Golden Cookie spawns', toggle: true, func: function () {CM.Config.CheckNotificationPermissions(CM.Options.GCNotification);}};
CM.ConfigData.GCFlash = {type: 'bool', group: 'NotificationGC', label: ['Flash OFF', 'Flash ON'], desc: 'Flash screen on Golden Cookie', toggle: true};
CM.ConfigData.GCSound = {type: 'bool', group: 'NotificationGC', label: ['Sound OFF', 'Sound ON'], desc: 'Play a sound on Golden Cookie', toggle: true};
CM.ConfigData.GCVolume = {type: 'vol', group: 'NotificationGC', label: [], desc: 'Volume'};
for (var i = 0; i < 101; i++) {
	CM.ConfigData.GCVolume.label[i] = i + '%';
}
CM.ConfigData.GCSoundURL = {type: 'url', group: 'NotificationGC', label: 'Sound URL:', desc: 'URL of the sound to be played when a Golden Cookie spawns'};
CM.ConfigData.FortuneNotification = {type: 'bool', group: 'NotificationFC', label: ['Notification OFF', 'Notification ON'], desc: 'Create a notification when Fortune Cookie is on the Ticker', toggle: true, func: function () {CM.Config.CheckNotificationPermissions(CM.Options.FortuneNotification);}};
CM.ConfigData.FortuneFlash = {type: 'bool', group: 'NotificationFC', label: ['Flash OFF', 'Flash ON'], desc: 'Flash screen on Fortune Cookie', toggle: true};
CM.ConfigData.FortuneSound = {type: 'bool', group: 'NotificationFC', label: ['Sound OFF', 'Sound ON'], desc: 'Play a sound on Fortune Cookie', toggle: true};
CM.ConfigData.FortuneVolume = {type: 'vol', group: 'NotificationFC', label: [], desc: 'Volume'};
for (var i = 0; i < 101; i++) {
	CM.ConfigData.FortuneVolume.label[i] = i + '%';
}
CM.ConfigData.FortuneSoundURL = {type: 'url', group: 'NotificationFC', label: 'Sound URL:', desc: 'URL of the sound to be played when the Ticker has a Fortune Cookie'};
CM.ConfigData.SeaNotification = {type: 'bool', group: 'NotificationSea', label: ['Notification OFF', 'Notification ON'], desc: 'Create a notification on Season Popup', toggle: true, func: function () {CM.Config.CheckNotificationPermissions(CM.Options.SeaNotification);}};
CM.ConfigData.SeaFlash = {type: 'bool', group: 'NotificationSea', label: ['Flash OFF', 'Flash ON'], desc: 'Flash screen on Season Popup', toggle: true};
CM.ConfigData.SeaSound = {type: 'bool', group: 'NotificationSea', label: ['Sound OFF', 'Sound ON'], desc: 'Play a sound on Season Popup', toggle: true};
CM.ConfigData.SeaVolume = {type: 'vol', group: 'NotificationSea', label: [], desc: 'Volume'};
for (var i = 0; i < 101; i++) {
	CM.ConfigData.SeaVolume.label[i] = i + '%';
}
CM.ConfigData.SeaSoundURL = {type: 'url', group: 'NotificationSea', label: 'Sound URL:', desc: 'URL of the sound to be played when a Season Special spawns'};
CM.ConfigData.GardFlash = {type: 'bool', group: 'NotificationGard', label: ['Garden Tick Flash OFF', 'Flash ON'], desc: 'Flash screen on Garden Tick', toggle: true};
CM.ConfigData.GardSound = {type: 'bool', group: 'NotificationGard', label: ['Sound OFF', 'Sound ON'], desc: 'Play a sound on Garden Tick', toggle: true};
CM.ConfigData.GardVolume = {type: 'vol', group: 'NotificationGard', label: [], desc: 'Volume'};
for (var i = 0; i < 101; i++) {
	CM.ConfigData.GardVolume.label[i] = i + '%';
}
CM.ConfigData.GardSoundURL = {type: 'url', group: 'NotificationGard', label: 'Garden Tick Sound URL:', desc: 'URL of the sound to be played when the garden ticks'};
CM.ConfigData.MagicNotification = {type: 'bool', group: 'NotificationMagi', label: ['Notification OFF', 'Notification ON'], desc: 'Create a notification when magic reaches maximum', toggle: true, func: function () {CM.Config.CheckNotificationPermissions(CM.Options.MagicNotification);}};
CM.ConfigData.MagicFlash = {type: 'bool', group: 'NotificationMagi', label: ['Flash OFF', 'Flash ON'], desc: 'Flash screen when magic reaches maximum', toggle: true};
CM.ConfigData.MagicSound = {type: 'bool', group: 'NotificationMagi', label: ['Sound OFF', 'Sound ON'], desc: 'Play a sound when magic reaches maximum', toggle: true};
CM.ConfigData.MagicVolume = {type: 'vol', group: 'NotificationMagi', label: [], desc: 'Volume'};
for (var i = 0; i < 101; i++) {
	CM.ConfigData.MagicVolume.label[i] = i + '%';
}
CM.ConfigData.MagicSoundURL = {type: 'url', group: 'NotificationMagi', label: 'Sound URL:', desc: 'URL of the sound to be played when magic reaches maxium'};
CM.ConfigData.WrinklerNotification = {type: 'bool', group: 'NotificationWrink', label: ['Notification OFF', 'Notification ON'], desc: 'Create a notification when a Wrinkler appears', toggle: true, func: function () {CM.Config.CheckNotificationPermissions(CM.Options.WrinklerNotification);}};
CM.ConfigData.WrinklerFlash = {type: 'bool', group: 'NotificationWrink', label: ['Flash OFF', 'Flash ON'], desc: 'Flash screen when a Wrinkler appears', toggle: true};
CM.ConfigData.WrinklerSound = {type: 'bool', group: 'NotificationWrink', label: ['Sound OFF', 'Sound ON'], desc: 'Play a sound when a Wrinkler appears', toggle: true};
CM.ConfigData.WrinklerVolume = {type: 'vol', group: 'NotificationWrink', label: [], desc: 'Volume'};
for (var i = 0; i < 101; i++) {
	CM.ConfigData.WrinklerVolume.label[i] = i + '%';
}
CM.ConfigData.WrinklerSoundURL = {type: 'url', group: 'NotificationWrink', label: 'Sound URL:', desc: 'URL of the sound to be played when a Wrinkler appears'};
CM.ConfigData.WrinklerMaxNotification = {type: 'bool', group: 'NotificationWrinkMax', label: ['Notification OFF', 'Notification ON'], desc: 'Create a notification when the maximum amount of Wrinklers has appeared', toggle: true, func: function () {CM.Config.CheckNotificationPermissions(CM.Options.WrinklerMaxNotification);}};
CM.ConfigData.WrinklerMaxFlash = {type: 'bool', group: 'NotificationWrinkMax', label: ['Flash OFF', 'Flash ON'], desc: 'Flash screen when the maximum amount of Wrinklers has appeared', toggle: true};
CM.ConfigData.WrinklerMaxSound = {type: 'bool', group: 'NotificationWrinkMax', label: ['Sound OFF', 'Sound ON'], desc: 'Play a sound when the maximum amount of Wrinklers has appeared', toggle: true};
CM.ConfigData.WrinklerMaxVolume = {type: 'vol', group: 'NotificationWrinkMax', label: [], desc: 'Volume'};
for (var i = 0; i < 101; i++) {
	CM.ConfigData.WrinklerMaxVolume.label[i] = i + '%';
}
CM.ConfigData.WrinklerMaxSoundURL = {type: 'url', group: 'NotificationWrinkMax', label: 'Sound URL:', desc: 'URL of the sound to be played when the maximum amount of Wrinklers has appeared'};
CM.ConfigData.Title = {type: 'bool', group: 'Notification', label: ['Title OFF', 'Title ON', 'Title Pinned Tab Highlight'], desc: 'Update title with Golden Cookie/Season Popup timers; pinned tab highlight only changes the title when a Golden Cookie/Season Popup spawns', toggle: true};

// Tooltip
CM.ConfigData.TooltipInfo = {type: 'bool', group: 'Tooltip', label: ['Extra Tooltip Information OFF', 'Extra Tooltip Information ON'], desc: 'Extra information in tooltips', toggle: true};
CM.ConfigData.TooltipAmor = {type: 'bool', group: 'Tooltip', label: ['Buildings Tooltip Amortization Information OFF', 'Buildings Tooltip Amortization Information ON'], desc: 'Add amortization information to buildings tooltip', toggle: true};
CM.ConfigData.ToolWarnLucky = {type: 'bool', group: 'Tooltip', label: ['Tooltip Lucky Warning OFF', 'Tooltip Lucky Warning ON'], desc: 'A warning when buying if it will put the bank under the amount needed for max "Lucky!" rewards', toggle: true};
CM.ConfigData.ToolWarnLuckyFrenzy = {type: 'bool', group: 'Tooltip', label: ['Tooltip Lucky Frenzy Warning OFF', 'Tooltip Lucky Frenzy Warning ON'], desc: 'A warning when buying if it will put the bank under the amount needed for max "Lucky!" (Frenzy) rewards', toggle: true};
CM.ConfigData.ToolWarnConjure = {type: 'bool', group: 'Tooltip', label: ['Tooltip Conjure Warning OFF', 'Tooltip Conjure Warning ON'], desc: 'A warning when buying if it will put the bank under the amount needed for max "Conjure Baked Goods" rewards', toggle: true};
CM.ConfigData.ToolWarnConjureFrenzy = {type: 'bool', group: 'Tooltip', label: ['Tooltip Conjure Frenzy Warning OFF', 'Tooltip Conjure Frenzy Warning ON'], desc: 'A warning when buying if it will put the bank under the amount needed for max "Conjure Baked Goods" rewards with Frenzy active', toggle: true};
CM.ConfigData.ToolWarnEdifice = {type: 'bool', group: 'Tooltip', label: ['Tooltip Edifice Warning OFF', 'Tooltip Edifice Warning ON'], desc: 'A warning when buying if it will put the bank under the amount needed for "Spontaneous Edifice" to possibly give you your most expensive building', toggle: true};
CM.ConfigData.ToolWarnPos = {type: 'bool', group: 'Tooltip', label: ['Tooltip Warning Position (Left)', 'Tooltip Warning Position (Bottom)'], desc: 'Placement of the warning boxes', toggle: false, func: function() {CM.Disp.ToggleToolWarnPos();}};
CM.ConfigData.TooltipGrim = {type: 'bool', group: 'Tooltip', label: ['Grimoire Tooltip Information OFF', 'Grimoire Tooltip Information ON'], desc: 'Extra information in tooltip for grimoire', toggle: true};
CM.ConfigData.ToolWrink = {type: 'bool', group: 'Tooltip', label: ['Wrinkler Tooltip OFF', 'Wrinkler Tooltip ON'], desc: 'Shows the amount of cookies a wrinkler will give when popping it', toggle: true};
CM.ConfigData.TooltipLump = {type: 'bool', group: 'Tooltip', label: ['Sugar Lump Tooltip OFF', 'Sugar Lump Tooltip ON'], desc: 'Shows the current Sugar Lump type in Sugar lump tooltip.', toggle: true};
CM.ConfigData.DragonAuraInfo = {type: 'bool', group: 'Tooltip', label: ['Extra Dragon Aura Info OFF', 'Extra Dragon Aura Info ON'], desc: 'Shows information about changes in CPS and costs in the dragon aura interface.', toggle: true};

// Statistics
CM.ConfigData.Stats = {type: 'bool', group: 'Statistics', label: ['Statistics OFF', 'Statistics ON'], desc: 'Extra Cookie Monster statistics!', toggle: true};
CM.ConfigData.MissingUpgrades = {type: 'bool', group: 'Statistics', label: ['Missing Upgrades OFF', 'Missing Upgrades ON'], desc: 'Shows Missing upgrades in Stats Menu. This feature can be laggy for users with a low amount of unlocked achievements.', toggle: true};
CM.ConfigData.UpStats = {type: 'bool', group: 'Statistics', label: ['Statistics Update Rate (Default)', 'Statistics Update Rate (1s)'], desc: 'Default Game rate is once every 5 seconds', toggle: false};
CM.ConfigData.TimeFormat = {type: 'bool', group: 'Statistics', label: ['Time XXd, XXh, XXm, XXs', 'Time XX:XX:XX:XX:XX'], desc: 'Change the time format', toggle: false};
CM.ConfigData.DetailedTime = {type: 'bool', group: 'Statistics', label: ['Detailed Time OFF', 'Detailed Time ON'], desc: 'Change how time is displayed in certain statistics and tooltips', toggle: true, func: function() {CM.Disp.ToggleDetailedTime();}};
CM.ConfigData.GrimoireBar = {type: 'bool', group: 'Statistics', label: ['Grimoire Magic Meter Timer OFF', 'Grimoire Magic Meter Timer ON'], desc: 'A timer on how long before the Grimoire magic meter is full', toggle: true};

// Notation
CM.ConfigData.Scale = {type: 'bool', group: 'Notation', label: ['Game\'s Setting Scale', 'Metric', 'Short Scale', 'Short Scale (Abbreviated)', 'Scientific Notation', 'Engineering Notation'], desc: 'Change how long numbers are handled', toggle: false, func: function() {CM.Disp.RefreshScale();}};
CM.ConfigData.ScaleDecimals = {type: 'bool', group: 'Notation', label: ['1 decimals', '2 decimals', '3 decimals'], desc: 'Set the number of decimals used when applicable', toggle: false, func: function() {CM.Disp.RefreshScale();}};
CM.ConfigData.ScaleSeparator = {type: 'bool', group: 'Notation', label: ['. for decimals (Standard)', '. for thousands'], desc: 'Set the separator used for decimals and thousands', toggle: false, func: function() {CM.Disp.RefreshScale();}};
CM.ConfigData.ScaleCutoff = {type: 'numscale', group: 'Notation', label: 'Notation Cut-off Point', desc: 'The number from which CookieMonster will start formatting numbers based on chosen scale. Standard is 999,999. Setting this above 999,999,999 might break certain notations.', min: 1, max: 999999999};

// Miscellaneous
CM.ConfigData.GCTimer = {type: 'bool', group: 'Miscellaneous', label: ['Golden Cookie Timer OFF', 'Golden Cookie Timer ON'], desc: 'A timer on the Golden Cookie when it has been spawned', toggle: true, func: function() {CM.Disp.ToggleGCTimer();}};
CM.ConfigData.Favicon = {type: 'bool', group: 'Miscellaneous', label: ['Favicon OFF', 'Favicon ON'], desc: 'Update favicon with Golden/Wrath Cookie', toggle: true, func: function() {CM.Disp.UpdateFavicon();}};
CM.ConfigData.WrinklerButtons = {type: 'bool', group: 'Miscellaneous', label: ['Extra Buttons OFF', 'Extra Buttons ON'], desc: 'Show buttons for popping wrinklers at bottom of cookie section', toggle: true, func: function() {CM.Disp.UpdateWrinklerButtons();}};
CM.ConfigData.ShowMysteriousAchievements = {type: 'bool', group: 'Miscellaneous', label: ['Show Mysterious Achievements OFF', 'Show Mysterious Achievements ON'], desc: 'Show mysterious achievemennts in stats', toggle: true, func: function() {}};
CM.ConfigData.ShowMysteriousShadowAchievements = {type: 'bool', group: 'Miscellaneous', label: ['Show Mysterious Shadow Achievements OFF', 'Show Mysterious Shadow Achievements ON'], desc: 'Show mysterious shadow achievemennts in stats', toggle: true, func: function() {}};


/**
 * This array describes all default settings
 * It is used by CM.LoadConfig() and CM.Config.RestoreDefault()
 */
CM.Data.ConfigDefault = {
	BotBar: 1, 
	TimerBar: 1, 
	TimerBarPos: 0, 
	BuildColor: 1, 
	BulkBuildColor: 0, 
	ColorPPBulkMode: 0,
	UpBarColor: 1, 
	UpgradeBarFixedPos: 1,
	CalcWrink: 0, 
	CPSMode: 1, 
	AvgCPSHist: 3, 
	AvgClicksHist: 0, 
	ToolWarnBon: 0, 
	GCNotification: 0,
	GCFlash: 1, 
	GCSound: 1,  
	GCVolume: 100, 
	GCSoundURL: 'https://freesound.org/data/previews/66/66717_931655-lq.mp3', 
	FortuneNotification: 0,
	FortuneFlash: 1, 
	FortuneSound: 1,  
	FortuneVolume: 100, 
	FortuneSoundURL: 'https://freesound.org/data/previews/174/174027_3242494-lq.mp3',
	SeaNotification: 0,
	SeaFlash: 1, 
	SeaSound: 1,  
	SeaVolume: 100, 
	SeaSoundURL: 'https://www.freesound.org/data/previews/121/121099_2193266-lq.mp3', 
	GardFlash: 1, 
	GardSound: 1,  
	GardVolume: 100, 
	GardSoundURL: 'https://freesound.org/data/previews/103/103046_861714-lq.mp3', 
	MagicNotification: 0,
	MagicFlash: 1, 
	MagicSound: 1,  
	MagicVolume: 100, 
	MagicSoundURL: 'https://freesound.org/data/previews/221/221683_1015240-lq.mp3',
	WrinklerNotification: 0,
	WrinklerFlash: 1, 
	WrinklerSound: 1,  
	WrinklerVolume: 100, 
	WrinklerSoundURL: 'https://freesound.org/data/previews/124/124186_8043-lq.mp3', 
	WrinklerMaxNotification: 0,
	WrinklerMaxFlash: 1, 
	WrinklerMaxSound: 1,  
	WrinklerMaxVolume: 100, 
	WrinklerMaxSoundURL: 'https://freesound.org/data/previews/152/152743_15663-lq.mp3', 
	Title: 1, 
	TooltipInfo: 1, 
	TooltipAmor: 0, 
	ToolWarnLucky: 1,
	ToolWarnLuckyFrenzy: 1,
	ToolWarnConjure: 1, 
	ToolWarnConjureFrenzy: 1,
	ToolWarnEdifice: 1,
	ToolWarnPos: 1, 
	TooltipGrim:1, 
	ToolWrink: 1, 
	TooltipLump: 1,
	DragonAuraInfo: 1,
	Stats: 1, 
	MissingUpgrades: 1,
	UpStats: 1, 
	TimeFormat: 0, 
	DetailedTime: 1, 
	GrimoireBar: 1, 
	Scale: 2, 
	ScaleDecimals: 2,
	ScaleSeparator: 0,
	ScaleCutoff: 999999,
	Colors: {Blue: '#4bb8f0', Green: '#00ff00', Yellow: '#ffff00', Orange: '#ff7f00', Red: '#ff0000', Purple: '#ff00ff', Gray: '#b3b3b3', Pink: '#ff1493', Brown: '#8b4513'},
	SortBuildings: 0,
	SortUpgrades: 0,
	GCTimer: 1, 
	Favicon: 1,
	WrinklerButtons: 1,
	Header: {BarsColors: 1, Calculation: 1, Notification: 1, NotificationGC: 1, NotificationFC: 1, NotificationSea: 1, NotificationGard: 1, NotificationMagi: 1, NotificationWrink: 1, NotificationWrinkMax: 1, Tooltip: 1, Statistics: 1, Notation: 1, Miscellaneous: 1, Lucky: 1, Spells: 1, Chain: 1, Prestige: 1, Wrink: 1, Sea: 1, Misc: 1},
};

