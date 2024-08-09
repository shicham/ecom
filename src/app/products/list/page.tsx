import Image from "next/image";
import { ListFilter } from 'lucide-react';
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableFilterDropdown } from "@/components/table-filter-dropdown"
import { statuses } from "@/data/products/data"

export default function Home() {
  return (
    
		
			<div className="page-content">
				<div className="text-primary flex flex-col shrink-0">
					<div className="table-content">
						<div className="table-header border-b py-4">
							<div className="table-filter">
								<div className="flex items-center justify-between px-8" >
									<div className="flex flex-1 items-center space-x-2 ">
										<div className="input-search flex flex-row items-center relative w-96 border-b">
											<span>
												<div className="inline-block font-roboto text-base font-normal ">
												<div className="">
													<div className="inline-block font-roboto text-base font-normal antialiased">
														<Button variant="outline" size="icon" className="border-0 bg-transparent text-[#0f0f0f] rounded-50p w-10 h-10 p-0 text-sm cursor-pointer box-border items-center justify-center basis-[0.000000001px] flex-[1]">
															<div className="w-6 h-6 fill-current">
																<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" className="w-full h-full" aria-hidden="true"><path clipRule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" fillRule="evenodd"></path></svg>
															</div>
														</Button>
														
													</div>
												</div>
												</div>
											</span>
											<div> 
												<Input type="email" placeholder="Searching all products" className="w-full bg-transparent border-0 shadow-transparent focus-visible:border-0" />
											</div>
										</div>
									
									
									
									</div>
									<div className="">
										<TableFilterDropdown items={statuses}/>
									</div>
									
								</div>
							
							</div>
						</div>
						<div>
							tabless
						</div>
					</div>
				
				</div>
			</div>
		
	
  );
}
