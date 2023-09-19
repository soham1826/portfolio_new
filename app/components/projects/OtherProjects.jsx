import React from "react";
import { FolderIcon } from "@heroicons/react/24/outline";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

const OtherProjects = ({title,sourceCode}) => {
  return (
    <div className="flex flex-col xl:w-[250px] xl:h-[200px] w-[120px] h-[120px] bg-gray-400/20 justify-center items-center rounded-md gap-2 mt-2">
      <FolderIcon className=" xl:w-20 xl:h-20 w-8 h-8 text-Scream" />
      <h3 className="font-poppins xl:text-lg text-md text-Swhite">{title}</h3>
      <Link href={sourceCode} className="p-2 hover:bg-Scream hover:text-Sblack border  border-Scream flex flex-row gap-1 font-poppins uppercase items-center xl:text-lg text-sm text-Swhite rounded-md">
        <SiGithub />
         Code
      </Link>
    </div>
  );
};

export default OtherProjects;
