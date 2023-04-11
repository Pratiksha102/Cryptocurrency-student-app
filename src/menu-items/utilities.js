// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Other Pages',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Enrol in Subjects',
            type: 'item',
            url: '/utils/enrol',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'View Marks',
            type: 'item',
            url: '/utils/view-marks',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Generate Certificate',
            type: 'item',
            url: '/utils/generate-certificate',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'tabler-icons',
            title: 'View Certificate',
            type: 'item',
            url: '/icons/view-certificate',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        // {
        //     id: 'icons',
        //     title: 'View Certificate',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default utilities;
