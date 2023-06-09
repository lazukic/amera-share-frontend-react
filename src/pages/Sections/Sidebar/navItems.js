const messages = {
  dashboard: {
    id: 'app.dashboard.title',
    defaultMessage: 'Dashboard',
  },
  group: {
    id: 'app.groups.title',
    defaultMessage: 'Groups',
  },
  mediaStreaming: {
    id: 'app.mediaStreaming.title',
    defaultMessage: 'Media Streaming',
  },
  conferencing: {
    id: 'app.conferencing.title',
    defaultMessage: 'Conferencing',
  },
  telephony: {
    id: 'app.telephony.title',
    defaultMessage: 'Telephony',
  },
  chat: {
    id: 'app.chat.title',
    defaultMessage: 'Chat',
  },
  mail: {
    id: 'app.mail.title',
    defaultMessage: 'Secure Email',
  },
  fileSharing: {
    id: 'app.fileSharing.title',
    defaultMessage: 'File Sharing',
  },
  calendar: {
    id: 'app.calendar.title',
    defaultMessage: 'Calendar and Scheduling',
  },
  transaction: {
    id: 'app.transaction.title',
    defaultMessage: 'Payments',
  },
  communication: {
    id: 'app.communication.title',
    defaultMessage: 'IoT Device Control',
  },
  statistic: {
    id: 'app.statistic.title',
    defaultMessage: 'History and Analytics',
  },
  logout: {
    id: 'app.header.menu.logout',
    defaultMessage: 'Log Out',
  },
};

const navItems = [
  {
    id: 'dashboard',
    icon: 'dashboard',
    label: messages.dashboard,
    to: '/dashboard',
    notification: 0,
    menuItems: [],
  },
  {
    id: 'groups',
    icon: 'group',
    to: '/group',
    btnLabel: 'Create New Group',
    label: messages.group,
    notification: 0,
    menuItems: [
      {
        id: 'myGroup',
        icon: 'shared',
        label: 'My Groups',
        to: '/group/my-groups',
        count: 0,
      },
      {
        id: 'groupMemberships',
        icon: 'fileShareSmall',
        label: 'Group Memberhips',
        to: '/group/membership',
        count: 0,
      },
      {
        id: 'starred',
        icon: 'starred',
        label: 'Starred',
        to: '/group/starred',
        count: 0,
      },
    ],
  },
  {
    id: 'video',
    icon: 'video',
    to: '/meeting',
    label: messages.conferencing,
    notification: 0,
    btnLabel: 'Schedule New Meeting',
    menuItems: [
      {
        id: 'conferencingAmera',
        icon: 'shared',
        label: 'Amera Conference',
        to: 'https://stream.amerashare.com/#/amera',
        external: true,
        count: 0,
      },
      {
        id: 'conferencingMCC',
        icon: 'shared',
        label: 'MCC Conference',
        to: 'https://stream.amerashare.com/#/mcc',
        external: true,
        count: 0,
      },
      {
        id: 'conferencingAmeraMCC',
        icon: 'shared',
        label: 'AmeraMCC Conference',
        to: 'https://stream.amerashare.com/#/ameramcc',
        external: true,
        count: 0,
      },
      {
        id: 'meetingUpcoming',
        icon: 'add',
        label: 'Upcoming Meetings',
        to: '/video/meeting-upcoming',
        count: 0,
      },
      {
        id: 'meetingGroups',
        icon: 'shared',
        label: 'Group Meetings',
        to: '/video/meetings-group',
        count: 0,
      },
      {
        id: 'meetingPersonal',
        icon: 'addContact',
        label: 'Personal Meeting Room',
        to: '/video/meeting-personal',
        count: 0,
      },
      {
        id: 'meetingTemplate',
        icon: 'history',
        label: 'Meeting Templates',
        to: '/video/meeting-templates',
        count: 0,
      },
      {
        id: 'meetingHistory',
        icon: 'fileShareSmall',
        label: 'Previous Meetings',
        to: '/video/meeting-history',
        count: 0,
      },
    ],
  },
  {
    id: 'mediaStreaming',
    icon: 'mediaStreaming',
    to: '/media-streaming',
    label: messages.mediaStreaming,
    menuItems: [
      {
        id: 'streamingAmera',
        icon: 'shared',
        label: 'Amera Room',
        to: 'https://conference.ameraiot.com/amera',
        external: true,
        count: 0,
      },
      {
        id: 'streamingMCC',
        icon: 'shared',
        label: 'MCC Room',
        to: 'https://conference.ameraiot.com/mcc',
        external: true,
        count: 0,
      },
      {
        id: 'streamingAmeraMCC',
        icon: 'shared',
        label: 'AmeraMCC Room',
        to: 'https://conference.ameraiot.com/ameramcc',
        external: true,
        count: 0,
      },
    ],
    notification: 0,
  },
  // {
  //   id: 'telephony',
  //   icon: 'telephony',
  //   to: '/telephony',
  //   label: messages.telephony,
  //   menuItems: [],
  //   notification: 0,
  // },
  // {
  //   id: 'chat',
  //   icon: 'chat',
  //   to: '/chat',
  //   label: messages.chat,
  //   menuItems: [],
  //   notification: 0,
  // },
  // {
  //   id: 'mail',
  //   icon: 'mail',
  //   to: '/mail',
  //   label: messages.mail,
  //   notification: 6,
  //   btnLabel: 'New Message',
  //   hasCount: true,

  //   menuItems: [
  //     {
  //       id: 'mailInbox',
  //       icon: 'mailInbox',
  //       label: 'Inbox',
  //       to: '/mail/inbox',
  //       count: 7,
  //       color: '#3246D3',
  //     },
  //     {
  //       id: 'mailStarred',
  //       icon: 'mailStarred',
  //       label: 'Starred',
  //       to: '/mail/starred',
  //       count: 0,
  //       color: '#3246D3',
  //     },
  //     {
  //       id: 'mailDrafts',
  //       icon: 'mailDrafts',
  //       label: 'Drafts',
  //       to: '/mail/mail-drafts',
  //       count: 2,
  //       color: '#F59B4D',
  //     },
  //     {
  //       id: 'mailTrash',
  //       icon: 'mailTrash',
  //       label: 'Trash',
  //       to: '/mail/trash',
  //       count: 0,
  //       color: '#F59B4D',
  //     },
  //     {
  //       id: 'mailArchive',
  //       icon: 'mailArchive',
  //       label: 'Archive',
  //       to: '/mail/archive',
  //       count: 0,
  //       color: '#F59B4D',
  //     },
  //     {
  //       id: 'mailSettings',
  //       icon: 'mailSettings',
  //       label: 'Settings',
  //       to: '/mail/settings',
  //       count: 0,
  //       color: '#F59B4D',
  //     },
  //   ],
  //   filterItems: [
  //     { color: '#3246D3', label: 'Work', id: 'work' },
  //     { color: '#F59B4D', label: 'Family', id: 'family' },
  //     { color: '#00D0FF', label: 'Friends', id: 'friends' },
  //     { color: '#EE3158', label: 'Clients', id: 'clients' },
  //   ],
  // },
  {
    id: 'fileShare',
    icon: 'fileShare',
    to: '/fileshare',
    notification: 0,
    label: messages.fileSharing,
    btnLabel: 'Create New',
    menuItems: [
      {
        id: 'filePriority',
        icon: 'add',
        label: 'Priority',
        to: '/fileshare/priority',
        count: 0,
      },
      {
        id: 'fileMyFiles',
        icon: 'fileShareSmall',
        label: 'My Files',
        to: '/fileshare/my-files',
        count: 0,
      },
      {
        id: 'fileShared',
        icon: 'shared',
        label: 'Group Files',
        to: '/fileshare/shared-files',
        count: 0,
      },
      {
        id: 'fileRecent',
        icon: 'history',
        label: 'Recent',
        to: '/fileshare/file-recent',
        count: 0,
      },
      {
        id: 'fileStarred',
        icon: 'starred',
        label: 'Starred',
        to: '/fileshare/starred',
        count: 0,
      },
    ],
  },
  {
    icon: 'calendar',
    to: '/calendar',
    label: messages.calendar,
    notification: 0,
    btnLabel: 'Create New Event',
    menuItems: [
      {
        id: 'eventUpcoming',
        icon: 'add',
        label: 'Upcoming Events',
        to: '/calendar/upcoming-events',
        count: 0,
      },
      {
        id: 'eventGroup',
        icon: 'shared',
        label: 'Group Events',
        to: '/calendar/group-events',
        count: 0,
      },

      {
        id: 'eventPrevious',
        icon: 'history',
        label: 'Previous Events',
        to: '/calendar/prev-events',
        count: 0,
      },
    ],
  },
  // {
  //   id: 'transaction',
  //   icon: 'transaction',
  //   to: '/transaction',
  //   label: messages.transaction,
  //   notification: 0,
  //   menuItems: [],
  // },
  {
    id: 'communication',
    icon: 'communication',
    to: '/communication',
    label: messages.communication,
    notification: 0,
    menuItems: [],
  },

  {
    id: 'statistic',
    icon: 'statistic',
    to: '/statistic',
    label: messages.statistic,
    notification: 0,
    menuItems: [],
  },

  {
    id: 'logout',
    icon: 'logout',
    to: '/logout',
    label: messages.logout,
    notification: 0,
    menuItems: [],
  },
];

export default navItems;
