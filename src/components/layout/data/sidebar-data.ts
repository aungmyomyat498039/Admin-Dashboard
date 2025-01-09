import {
  IconBrowserCheck,
  IconHelp,
  IconLayoutDashboard,
  IconNotification,
  IconPalette,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUser,
  IconBuildingCommunity
} from '@tabler/icons-react'
import { Command, SquareKanban } from 'lucide-react'
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
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'ダッシュボード',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'クライアント会社一覧',
          url: '/tasks',
          icon: IconBuildingCommunity,
        },
        {
          title: 'スッタッフ一覧',
          url: '/apps',
          icon: IconUser,
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'プラン',
          url: '/tasks',
          icon: SquareKanban,   
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
              title: 'プロフィール',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'アカウント',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: '通知',
              url: '/settings/notifications',
              icon: IconNotification,
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
