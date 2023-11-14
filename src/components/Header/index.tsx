import { useRouter } from "next/router";
import SideMenu from "../SideMenu"
import { ChangeEvent, useEffect, useState } from "react";

const Header = () => {

    const router = useRouter();

    useEffect(() => {
      const userId = localStorage.getItem("userId");
  
      if (!userId) {
        router.push("/Login");
      }
    }, []);
  
    const [openMenu, setOpenMenu] = useState(false); // Inicializa o estado openMenu
  
    const [selectedOption, setSelectedOption] = useState("opcao1");
    const [searchText, setSearchText] = useState("");
  
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
    };
  
    let userId;
    if (typeof window !== "undefined") {
      userId = localStorage.getItem("userId");
    }
    console.log("ID do usuário:", userId);
    return (
        <SideMenu
        activeRoute={router.pathname}
        openMenu={openMenu}
      ></SideMenu>
    )
}

export default Header