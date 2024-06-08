// import React from "react";
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Link } from "@nextui-org/react";
// import { NavbarMenuItem } from "@nextui-org/navbar";

// export default function MyNavbar() {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     const menuItems = [
//         "Home",
//         "Protein",
//         "Pre-Workouts",
//         "WellBeing",
//         "Fat Loss",
//         "studio",
//         "Basket",
//     ];

//     return (
//         <Navbar onMenuOpenChange={setIsMenuOpen}>
//             <NavbarContent>
//                 <NavbarMenuToggle
//                     aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//                     className="sm:hidden"
//                 />
//                 <NavbarBrand>
//                     <Image 
//                         src="/logo/Logo__3_-removebg-preview.png"
//                         alt="snc"
//                         width={200}
//                         height={200}
//                     />
//                     <p className="font-bold text-inherit">Snc</p>
//                 </NavbarBrand>
//             </NavbarContent>

//             <NavbarContent className="hidden sm:flex gap-4" justify="center">
//                 <NavbarItem>
//                     <Link color="foreground" href="/">
//                         Home
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem isActive>
//                     <Link href="/protein" aria-current="page">
//                         Proteins
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Link color="foreground" href="/pre-workout">
//                         Pre-Workouts
//                     </Link>
//                 </NavbarItem>
//             </NavbarContent>
//             <NavbarContent justify="end">
//                 <NavbarItem className="hidden lg:flex">
//                     <Link href="/wellbeing">WellBeing</Link>
//                 </NavbarItem>
//                 <NavbarItem className="hidden lg:flex">
//                     <Link href="/FatLoss">Fat Loss</Link>
//                 </NavbarItem>
//                 <NavbarItem className="hidden lg:flex">
//                     <Link href="/FatLoss">Studio</Link>
//                 </NavbarItem>
//                 <NavbarItem className="hidden lg:flex">
//                     <Link href="/FatLoss">Basket</Link>
//                 </NavbarItem>
//             </NavbarContent>
//             <NavbarMenu>
//                 {menuItems.map((item, index) => (
//                     <NavbarMenuItem key={`${item}-${index}`}>
//                         <Link
//                             color={
//                                 index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
//                             }
//                             className="w-full"
//                             href="#"
//                             size="lg"
//                         >
//                             {item}
//                         </Link>
//                     </NavbarMenuItem>
//                 ))}
//             </NavbarMenu>
//         </Navbar>
//     );
// }
