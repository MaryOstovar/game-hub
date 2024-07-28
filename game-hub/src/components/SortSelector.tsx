
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronBarDown} from "react-icons/all";

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
