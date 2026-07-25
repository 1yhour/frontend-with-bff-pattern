import { footIcon, resourceData } from "@/app/data/footerData";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Footer() {
    return (
        <footer className="w-full border-t border-zinc-800/60 bg-zinc-950 mt-8">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-12">
                    <div className="md:col-span-4">
                        <h2 className="text-xl font-semibold text-zinc-100 mb-4 tracking-tight">Procesio</h2>
                        <p className="text-xs text-zinc-500 font-light mb-5 leading-relaxed max-w-xs">
                            Streamline your business processes with elegant, scalable automation.
                        </p>
                        <div className="flex gap-2">
                            {footIcon.map((item) => (
                                <div
                                    key={item.id}
                                    className="w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-colors duration-200"
                                >
                                    <a href={item.url} aria-label="Social link">
                                        {item.icons}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    {resourceData.map((item) => (
                        <div className="md:col-span-2" key={item.id}>
                            <div className="text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-4">
                                {item.title}
                            </div>
                            <div className="flex flex-col gap-2.5">
                                {item.category.map((category) => (
                                    <div key={category}>
                                        <a
                                            href="#"
                                            className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-150 font-light"
                                        >
                                            {category}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="md:col-span-12">
                        <div className="border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <p className="text-xs text-zinc-600">© 2026 Procesio, Inc. All rights reserved.</p>
                            <div className="flex items-center gap-6">
                                <div className="flex gap-4">
                                    {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
                                        <a
                                            key={link}
                                            href="#"
                                            className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger render={<button/>}>
                                        <div className="flex items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors">
                                            <GrLanguage size={11} />
                                            <span className="text-xs">English</span>
                                            <IoIosArrowDown size={10} />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-zinc-200">
                                        <DropdownMenuGroup>
                                            <DropdownMenuLabel className="text-zinc-400 text-xs">Language</DropdownMenuLabel>
                                            <DropdownMenuSeparator className="bg-zinc-800" />
                                            <DropdownMenuItem className="hover:bg-zinc-800 text-sm">English</DropdownMenuItem>
                                            <DropdownMenuItem className="hover:bg-zinc-800 text-sm">Khmer</DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-12 mt-8 text-zinc-900 w-full overflow-hidden leading-none select-none pointer-events-none">
                        <div className="flex justify-center text-center font-black text-[14vw] tracking-tighter w-full uppercase">
                            <span>Procesio</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
