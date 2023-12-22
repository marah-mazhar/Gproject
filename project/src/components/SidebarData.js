import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData=[
{
    title:"Home",
    Icon:<HomeIcon/>,
    link:"/Home"
},
{
    title:"Products",
    Icon:<LocalGroceryStoreIcon/>,
    link:"/product"
},
{
    title:"Graphs",
    Icon:<BarChartIcon/>,
    link:"/Graphs"
},
{
    title:"Dataset",
    Icon:<CreateNewFolderIcon/>,
    link:"/Dataset"
},
{
    
        title: "Logout",
        Icon: <LogoutIcon />,
        link: "/Home", // Use the link directly
      
}

]


