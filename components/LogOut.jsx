import React, { useContext } from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Button,
	Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlinePoweroff } from "react-icons/ai";
import GlobalContext from "../context/GlobalContext";
import PopUpModal from "./PopUpModal";

export default function LogOut() {
	const { deleteToken, modalContent } = useContext(GlobalContext);
	return (
		<>
			<PopUpModal modalContent={modalContent}></PopUpModal>
			<Menu>
				<MenuButton
					colorScheme={"teal"}
					as={Button}
					rightIcon={<ChevronDownIcon />}
				>
					Your Acount
				</MenuButton>
				<MenuList>
					<MenuItem
						onClick={() => deleteToken()}
						display={"flex"}
						justifyContent={"space-evenly"}
						minH="48px"
					>
						<AiOutlinePoweroff />
						<span>Log out</span>
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
}
