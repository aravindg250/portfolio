import { certificatesData } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type CertificateProps = (typeof certificatesData)[number];

export default function Certificate({
    title,
    description,
    icon,
    issueDate,
    href,
}: CertificateProps) {
    return (
        <motion.div className="mb-3 sm:mb-8 last:mb-0 flex flex-row">
            <a href={href}>
                <div className="bg-gray-100 max-w-[48rem] border-black/5 rounded-lg overflow-auto sm:pr-8 relative hover:bg-gray-200 transition">
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[100%] flex flex-col">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="mt-2 leading-relaxed text-gray-700 text-[15px]">
                            {description}
                        </p>
                        <div className="flex items-center mt-4">
                            <Image
                                src={icon.src}
                                alt={icon.alt}
                                className="w-10 h-10 mr-2"
                                width="100"
                                height="100"
                            />
                            <p className="text-gray-700 text-[15px]">
                                {issueDate}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
}
