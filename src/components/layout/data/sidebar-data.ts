import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconCar,
  IconUsers,
  IconBook,
  IconFile
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: '管理者',
    email: 'gicadmin@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'GIC Company',
      logo: Command,
      plan: 'イノベーション企業',
    },
    {
      name: '代理店',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'トップページ',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: ' 車両利用申請',
          url: '/tasks',
          icon: IconCar,
        },
        {
          title: '車両利用申請・管理',
          url: '/apps',
          icon: IconCar,
        },
        {
          title: 'スタッフ・管理',
          url: '/users',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'マニュアル',
          url: '/',
          icon: IconBook,
          
        },
        {
          title: '利用規約',
          url: '/',
          icon: IconFile,
          
        },
        {
          title: 'プライバシーポリシー',
          url: '/',
          icon: IconFile,
          
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'アカウント設定',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'サポートセンター',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
