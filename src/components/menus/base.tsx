import React from "react";

interface MenuItemProps {
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
  children: React.ReactNode;
}

interface MenuItemGroupProps {
  border?: boolean;
  children: React.ReactNode;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <li
      onClick={props.onClick}
      className="leading-6 cursor-default px-2.5 rounded hover:text-white hover:bg-blue-500"
    >
      {props.children}
    </li>
  );
};

const MenuItemGroup = (props: MenuItemGroupProps) => {
  const border =
    props.border === false
      ? "pb-1"
      : "relative px-1 pt-1 after:content-empty after:block after:pb-0 after:h-1.5 after:max-w-full after:mx-2 after:border-b after:border-c-400";
  return <ul className={`relative px-1 pt-1 ${border}`}>{props.children}</ul>;
};

export { MenuItem, MenuItemGroup };
