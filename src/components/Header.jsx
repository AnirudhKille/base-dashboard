import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PollIcon from "@mui/icons-material/Poll";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import data from "../assets/data";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  return (
    <header class="text-gray-600 body-font">
      <nav class=" px-6 my-2 flex flex-wrap   justify-between items-center w-full">
        <div class="flex title-font font-medium items-center text-gray-900 gap-2">
          <div className="hidden  max-md:flex  space-x-4 items-center">
            {/* small screen nav bar */}
            <div className=" absolute top-2.5 left-2 ">
              <IconButton onClick={() => setIsMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 bg-white w-full">
                <div className="flex items-center mt-5 justify-between">
                  <div className="flex items-center gap-2">
                    <span class="text-xl ">Base</span>
                  </div>

                  <div className="mr-5">
                    <IconButton onClick={() => setIsMenuOpen(false)}>
                      <ClearIcon />
                    </IconButton>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 hover:text-blue-500 p-2 mt-5 ">
                    <GridViewRoundedIcon /> Dashboard
                  </div>
                  <div className="flex gap-2 hover:text-blue-500 p-2">
                    <PollIcon />
                    Upload
                  </div>
                  <div className="flex gap-2 hover:text-blue-500 p-2">
                    <ConfirmationNumberIcon />
                    Invoice
                  </div>
                  <div className="flex gap-2 hover:text-blue-500 p-2">
                    <DescriptionIcon />
                    Schedule
                  </div>
                  <div className="flex gap-2 hover:text-blue-500 p-2">
                    <CalendarMonthIcon /> Calendar
                  </div>
                  <div className="flex gap-2 hover:text-blue-500 p-2">
                    <NotificationsIcon />
                    Notification
                  </div>
                  <div className="flex gap-2 hover:text-blue-500 p-2">
                    <SettingsIcon />
                    Settings
                  </div>
                </div>
              </div>
            )}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full ml-5"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="text-xl ">Base</span>
        </div>
        <div class="flex items-center mx-2 gap-2">
          <NotificationsNoneIcon />

          <div className="">
            <AccountCircleIcon />
          </div>
        </div>
      </nav>

      <div className="flex ">
        <div className="p-6 flex flex-col gap-6 font-bold max-md:hidden">
          <div className="flex gap-2 hover:text-blue-500 ">
            <GridViewRoundedIcon /> Dashboard
          </div>
          <div className="flex gap-2 hover:text-blue-500">
            <PollIcon />
            Upload
          </div>
          <div className="flex gap-2 hover:text-blue-500">
            <ConfirmationNumberIcon />
            Invoice
          </div>
          <div className="flex gap-2 hover:text-blue-500">
            <DescriptionIcon />
            Schedule
          </div>
          <div className="flex gap-2 hover:text-blue-500">
            <CalendarMonthIcon /> Calendar
          </div>
          <div className="flex gap-2 hover:text-blue-500">
            <NotificationsIcon />
            Notification
          </div>
          <div className="flex gap-2 hover:text-blue-500">
            <SettingsIcon />
            Settings
          </div>
        </div>

        <div className=" bg-white w-full  h-screen ">
          <div className="border border-dotted border-black flex flex-col justify-center items-center mx-auto w-1/2 h-1/2 my-10">
            <div>
              {isUploaded ? (
                <span className="text-red-500" onClick={()=>setIsUploaded(false)}> Remove</span>
              ) : (
                <div>
                  Drop your excel sheet or
                  <span className="text-blue-700"> Browse</span>
                </div>
              )}
            </div>
          </div>
          <button
            className="mx-auto w-1/2 text-white bg-blue-700 rounded-sm block py-2 disabled:blur-sm"
            onClick={() => setIsUploaded(!isUploaded)} disabled={isUploaded}
          >
            Upload
          </button>
          {isUploaded && (
            <div className="w-full p-2">
              <h3 className="font-bold mt-5 mb-5">Uploads</h3>
              <table className="bg-slate-100 w-full rounded-md ">
                <thead className="">
                  <tr>
                    <td className="p-3">SI No.</td>
                    <td className="p-3">Links</td>
                    <td className="p-3">Prefix</td>
                    <td className="p-3">Add tags</td>
                    <td className="p-3">Selected Tags</td>
                  </tr>
                </thead>
                <tbody className="bg-slate-100">
                  {data.map((item) => (
                    <tr key={item.id} className="bg-white m-2  h-5">
                      <td className="p-3">{item.id}</td>
                      <td className="p-3">
                        <a
                          href={item.links}
                          action="_blank"
                          className="text-blue-500 hover:underline"
                        >
                          {item.links}
                        </a>
                      </td>
                      <td className="p-3">
                        <span>{item.prefix}</span>
                      </td>
                      <td className="p-3">
                        <select>
                          {item.selectTags.split(",").map((tag) => (
                            <option key={tag.trim()}>{tag.trim()}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        {item.selectedTags.split(",").map((tag) => (
                          <span
                            key={tag.trim()}
                            className="text-white bg-blue-700 m-2 rounded-md mt-2 px-2 py-.5 overflow-scroll"
                          >
                            {tag.trim()} <ClearIcon className="p-1" />{" "}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
