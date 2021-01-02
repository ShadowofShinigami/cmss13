/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

export const MAX_VISIBLE_MESSAGES = 2500;
export const MAX_PERSISTED_MESSAGES = 1000;
export const MESSAGE_SAVE_INTERVAL = 10000;
export const MESSAGE_PRUNE_INTERVAL = 60000;
export const COMBINE_MAX_MESSAGES = 5;
export const COMBINE_MAX_TIME_WINDOW = 5000;
export const IMAGE_RETRY_DELAY = 250;
export const IMAGE_RETRY_LIMIT = 10;
export const IMAGE_RETRY_MESSAGE_AGE = 60000;

// Default message type
export const MESSAGE_TYPE_UNKNOWN = 'unknown';

// Internal message type
export const MESSAGE_TYPE_INTERNAL = 'internal';

// Must match the set of defines in code/__DEFINES/chat.dm
export const MESSAGE_TYPE_SYSTEM = 'system';
export const MESSAGE_TYPE_LOCALCHAT = 'localchat';
export const MESSAGE_TYPE_RADIO = 'radio';
export const MESSAGE_TYPE_INFO = 'info';
export const MESSAGE_TYPE_WARNING = 'warning';
export const MESSAGE_TYPE_HELPFUL = 'helpful';
export const MESSAGE_TYPE_DEADCHAT = 'deadchat';
export const MESSAGE_TYPE_OOC = 'ooc';
export const MESSAGE_TYPE_ADMINPM = 'adminpm';
export const MESSAGE_TYPE_COMBAT = 'combat';
export const MESSAGE_TYPE_ADMINCHAT = 'adminchat';
export const MESSAGE_TYPE_MODCHAT = 'modchat';
export const MESSAGE_TYPE_EVENTCHAT = 'eventchat';
export const MESSAGE_TYPE_ADMINLOG = 'adminlog';
export const MESSAGE_TYPE_ATTACKLOG = 'attacklog';
export const MESSAGE_TYPE_DEBUG = 'debug';

// Metadata for each message type
export const MESSAGE_TYPES = [
  // Always-on types
  {
    type: MESSAGE_TYPE_SYSTEM,
    name: 'System Messages',
    description: 'Messages from your client, always enabled',
    selector: '.boldannounce',
    important: true,
  },
  // Basic types
  {
    type: MESSAGE_TYPE_LOCALCHAT,
    name: 'Local',
    description: 'In-character local messages (say, emote, etc)',
    selector: '.say, .emote, .say_quote, .german, .rough, .japanese, .monkey, .vox, .changeling, .soghun, .skrell, .tajaran_signlang, .tajaran, .xeno, .xenoqueen, .xenoleader',
  },
  {
    type: MESSAGE_TYPE_RADIO,
    name: 'Radio',
    description: 'All departments of radio messages',
    selector: '.hivemind:not(.xeno, .xenoqueen, .xenoleader), .deltaradio, .charlieradio, .bravoradio, .alpharadio, .wyradio, .intelradio, .jtacradio, .alert, .syndradio, .centradio, .airadio, .entradio, .comradio, .secradio, .engradio, .medradio, .sciradio, .supradio, .srvradio, .expradio, .radio, .deptradio, .newscaster',
  },
  {
    type: MESSAGE_TYPE_INFO,
    name: 'Info',
    description: 'Non-urgent messages from the game and items',
    selector: '.notice:not(.pm), .adminnotice, .info, .sinister, .cult, .xenonotice, .xenoannounce, .yautjabold, .yautjaboldbig',
  },
  {
    type: MESSAGE_TYPE_WARNING,
    name: 'Warnings',
    description: 'Urgent messages from the game and items',
    selector: '.warning:not(.pm), .critical, .userdanger, .italics, .xenowarning, .xenominorwarning',
  },
  {
    type: MESSAGE_TYPE_DEADCHAT,
    name: 'Deadchat',
    description: 'All of deadchat',
    selector: '.deadsay',
  },
  {
    type: MESSAGE_TYPE_OOC,
    name: 'OOC',
    description: 'The bluewall of global OOC messages',
    selector: '.ooc, .adminooc, .xooc, .mooc, .yooc, .modooc',
  },
  {
    type: MESSAGE_TYPE_ADMINPM,
    name: 'Admin PMs',
    description: 'Messages to/from admins (adminhelp)',
    selector: '.pm, .adminhelp',
  },
  {
    type: MESSAGE_TYPE_COMBAT,
    name: 'Combat Log',
    description: 'Urist McTraitor has stabbed you with a knife!',
    selector: '.danger, .moderate, .disarm, .attack, .passive, .xenodanger, .xenohighdanger, .highdanger, .avoidharm',
  },
  {
    type: MESSAGE_TYPE_HELPFUL,
    name: 'Helpful',
    description: 'PFC Unga Dunga starts feeding you a pill.',
    selector: '.helpful',
  },
  {
    type: MESSAGE_TYPE_UNKNOWN,
    name: 'Unsorted',
    description: 'Everything we could not sort, always enabled',
  },
  // Admin stuff
  {
    type: MESSAGE_TYPE_ADMINCHAT,
    name: 'Admin Chat',
    description: 'ASAY messages',
    selector: '.admin_channel, .adminsay, .headminsay',
    admin: true,
  },
  {
    type: MESSAGE_TYPE_MODCHAT,
    name: 'Mod Chat',
    description: 'MSAY messages',
    selector: '.mod_channel, .mod',
    admin: true,
  },
  {
    type: MESSAGE_TYPE_ADMINLOG,
    name: 'Admin Log',
    description: 'ADMIN LOG: Urist McAdmin has jumped to coordinates X, Y, Z',
    selector: '.log_message, .admin',
    admin: true,
  },
  {
    type: MESSAGE_TYPE_ATTACKLOG,
    name: 'Attack Log',
    description: 'Urist McTraitor has shot John Doe',
    selector: '.attacklog',
    admin: true,
  },
  {
    type: MESSAGE_TYPE_DEBUG,
    name: 'Debug Log',
    description: 'DEBUG: SSPlanets subsystem Recover().',
    selector: '.debuginfo',
    admin: true,
  },
];
