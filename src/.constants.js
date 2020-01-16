module.exports = Object.freeze({
  TOKEN: '970612472:AAGdWwY7506tfotfOhR4lDZBidc4vYxu_Ag',
  ARIA_SECRET: 'nadine',
  ARIA_PORT: '',
  ARIA_DOWNLOAD_LOCATION: '/root/content/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/root/content/downloads', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '1kfCKERILGR3aXyibIZkwb3wF4NhKevr1', //'1GpB718Z4Tht1pigv_HdJPLYAmBZe7k_v', //WEST MOVIES6
  DRIVE_FILE_PRIVATE: {
	enabled: false
  }
  SUDO_USERS: [591530116],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-345870276],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 10000, // A smaller number will update faster, but might cause rate limiting 
  COMMANDS_USE_BOT_NAME: {
	enabled: false
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  IS_TEAM_DRIVE: true			       
});
