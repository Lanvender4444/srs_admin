// assets
import { IconBrandGithub } from '@tabler/icons';

// constant
const icons = { IconBrandGithub };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'documentation',
            title: 'Github仓库',
            type: 'item',
            url: 'https://github.com/Marksagittarius/srs_admin',
            icon: icons.IconBrandGithub,
            external: true,
            target: true
        }
    ]
};

export default other;
