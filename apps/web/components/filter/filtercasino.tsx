import * as React from "react"
import {
  ArrowDownUp,
  ArrowDownZA,
  ArrowUpAZ,
  ChevronDown,
  ChevronUp,
  Dice4,
  Filter,
  Globe,
  Headphones,
  Heart,
  Languages,
  ListFilter,
  MessageSquare,
  Star,
  Wallet
} from "lucide-react"

import { Button, Separator, Sheet, SheetContent, SheetTrigger } from "@ssp/ui"

import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"

const SHEET_SIDES = ["left"] as const
type SheetSide = (typeof SHEET_SIDES)[number]

const FiltersCasino = ({}: {}) => {
  const [selectedProviders, setSelectedProviders] = React.useState<string[]>([])
  const [isHeartCollapsed, setIsHeartCollapsed] = React.useState<boolean>(true)
  const [isGlobeCollapsed, setIsGlobeCollapsed] = React.useState<boolean>(true)
  const [isSlotCollapsed, setIsSlotCollapsed] = React.useState<boolean>(true)
  const [isPaymentCollapsed, setIsPaymentCollapsed] = React.useState<boolean>(true)
  const [isUserFeedbackCollapsed, setIsUserFeedbackCollapsed] = React.useState<boolean>(true)
  const [isLicencingCollapsed, setIsLicencingCollapsed] = React.useState<boolean>(true)
  const [isLanguageCollapsed, setIsLanguageCollapsed] = React.useState<boolean>(true)
  const [isCustomerSupportCollapsed, setIsCustomerSupportCollapsed] = React.useState<boolean>(true)
  const [isLiveChatCollapsed, setIsLiveChatCollapsed] = React.useState<boolean>(true)
  const [isSortOptionsCollapsed, setIsSortOptionsCollapsed] = React.useState<boolean>(true)
  const [isFilterSlotsCollapsed, setIsFilterSlotsCollapsed] = React.useState<boolean>(true)
  const [isSlotsByLanguageCollapsed, setIsSlotsByLanguageCollapsed] = React.useState<boolean>(true)
  const [isFilterMobileCollapsed, setIsFilterMobileCollapsed] = React.useState<boolean>(true)
  const [isLanguageMobileCollapsed, setIsLanguageMobileCollapsed] = React.useState<boolean>(true)
  const [isSortOptionMobileCollapsed, setIsSortOptionMobileCollapsed] = React.useState<boolean>(true)

  const toggleSortOptionMobileCollapse = () => {
    setIsSortOptionMobileCollapsed(!isSortOptionMobileCollapsed)
  }

  const toggleFilterMobileCollapse = () => {
    setIsFilterMobileCollapsed(!isFilterMobileCollapsed)
  }
  //   filter slots ^^

  const toggleFilterLanguageMobileCollapsed = () => {
    setIsLanguageMobileCollapsed(!isLanguageMobileCollapsed)
  }

  const toggleSlotsByLanguageCollapse = () => {
    setIsSlotsByLanguageCollapsed(!isSlotsByLanguageCollapsed)
  }

  const toggleFilterSlotsCollapse = () => {
    setIsFilterSlotsCollapsed(!isFilterSlotsCollapsed)
  }

  const toggleSortOptionsCollapse = () => {
    setIsSortOptionsCollapsed(!isSortOptionsCollapsed)
  }

  const toggleHeartCollapse = () => {
    setIsHeartCollapsed(!isHeartCollapsed)
  }

  const toggleGlobeCollapse = () => {
    setIsGlobeCollapsed(!isGlobeCollapsed)
  }

  const toggleSlotCollapse = () => {
    setIsSlotCollapsed(!isSlotCollapsed)
  }

  const togglePaymentCollapse = () => {
    setIsPaymentCollapsed(!isPaymentCollapsed)
  }

  const toggleUserFeedbackCollapse = () => {
    setIsUserFeedbackCollapsed(!isUserFeedbackCollapsed)
  }

  const toggleLicencingCollapse = () => {
    setIsLicencingCollapsed(!isLicencingCollapsed)
  }

  const toggleLanguageCollapse = () => {
    setIsLanguageCollapsed(!isLanguageCollapsed)
  }

  const toggleCustomerSupportCollapse = () => {
    setIsCustomerSupportCollapsed(!isCustomerSupportCollapsed)
  }

  const toggleLiveChatCollapse = () => {
    setIsLiveChatCollapsed(!isLiveChatCollapsed)
  }

  //   const handleCheckboxChange = (providerId: string) => {
  //     if (selectedProviders.includes(providerId)) {
  //       setSelectedProviders(selectedProviders.filter((id) => id !== providerId))
  //     } else {
  //       setSelectedProviders([...selectedProviders, providerId])
  //     }
  //   }

  return (
    <div className='h-full  flex-col   '>
      <div className='flex p-6 lg:hidden'>
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <div className='flex cursor-pointer justify-center gap-2 md:flex md:items-center'>
                <Button className='curson-pointer'>
                  Filters
                  <Filter className='' />
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent side={side} className='bg-secondary'>
              <div className=''>
                <div className='justify-center  bg-transparent p-6'>
                  <div className='flex items-center gap-2' onClick={toggleSortOptionMobileCollapse}>
                    <ArrowDownUp />
                    <div className='text-gray-600'>Sort Options</div>
                    {isSortOptionsCollapsed ? (
                      <ChevronDown className='cursor-pointer items-end' />
                    ) : (
                      <ChevronUp className='cursor-pointer' />
                    )}
                  </div>
                  {!isSortOptionMobileCollapsed && (
                    <div className='mt-4 flex flex-col gap-4'>
                      <div className='flex cursor-pointer gap-2'>
                        <ArrowUpAZ className='text-yellow-500' />
                        <div>From A to Z</div>
                      </div>
                      <div className='flex cursor-pointer  gap-2'>
                        <ArrowDownZA className='text-yellow-500' />
                        <div>From Z to A</div>
                      </div>
                      <div className='flex cursor-pointer  gap-2'>
                        <Star className='text-yellow-500' />
                        <div>Latest reviews</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className='p-6'>
                  <div className='mb-4 flex gap-2' onClick={toggleFilterMobileCollapse}>
                    <ListFilter />
                    <div className='text-gray-600'>Filter slots</div>
                    {isFilterSlotsCollapsed ? (
                      <ChevronDown className='cursor-pointer items-end' />
                    ) : (
                      <ChevronUp className='cursor-pointer' />
                    )}
                  </div>
                  {!!isFilterMobileCollapsed && (
                    <div className='flex flex-col gap-4'>
                      {/* Popular filters */}
                      <div className='flex gap-2' onClick={toggleHeartCollapse}>
                        <Heart className='text-yellow-500' />
                        <div className='flex w-full items-center justify-between'>
                          <span>Popular filters</span>
                          {isHeartCollapsed ? (
                            <ChevronDown className='cursor-pointer items-end ' />
                          ) : (
                            <ChevronUp className=' cursor-pointer ' />
                          )}
                        </div>
                      </div>
                      {!isHeartCollapsed && (
                        <div className='flex w-full flex-col justify-center gap-2 p-1'>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>Mobile-friendly slots</span>
                              <span className='text-yellow-500'>535</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>Crypto slots</span>
                              <span className='text-yellow-500'>35</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>Live slots</span>
                              <span className='text-yellow-500'>12</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>Live dealer slots</span>
                              <span className='text-yellow-500'>4</span>
                            </div>
                          </div>
                        </div>
                      )}
                      <Separator />
                      {/* Country */}
                      <div className='flex gap-2' onClick={toggleGlobeCollapse}>
                        <Globe className='text-yellow-500' />
                        <div className='flex w-full items-center justify-between'>
                          <span>Country</span>
                          {isGlobeCollapsed ? (
                            <ChevronDown className='cursor-pointer items-end ' />
                          ) : (
                            <ChevronUp className='cursor-pointer ' />
                          )}
                        </div>
                      </div>
                      {!isGlobeCollapsed && (
                        <div className='flex flex-col gap-2 p-1'>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>Mobile-friendly slots</span>
                              <span className='text-yellow-500'>535</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>Crypto slots</span>
                              <span className='text-yellow-500'>35</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>Live slots</span>
                              <span className='text-yellow-500'>12</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>Live dealer slots</span>
                              <span className='text-yellow-500'>4</span>
                            </div>
                          </div>
                        </div>
                      )}
                      <Separator />
                      {/* Slot Games */}
                      <div className='flex gap-2' onClick={toggleSlotCollapse}>
                        <Dice4 className='text-yellow-500' />
                        <div className='flex w-full items-center justify-between'>
                          <span>Slot Games</span>
                          {isSlotCollapsed ? (
                            <ChevronDown className='cursor-pointer items-end ' />
                          ) : (
                            <ChevronUp className='cursor-pointer ' />
                          )}
                        </div>
                      </div>
                      {!isSlotCollapsed && (
                        <div className='flex flex-col gap-2 p-1'>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>3 Reel Slots</span>
                              <span className='text-yellow-500'>535</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>5 Reel Slots</span>
                              <span className='text-yellow-500'>35</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>Progressive Jackpots</span>
                              <span className='text-yellow-500'>12</span>
                            </div>
                          </div>
                        </div>
                      )}
                      <Separator />
                      {/* Payment Methods */}
                      <div className='flex gap-2' onClick={togglePaymentCollapse}>
                        <Wallet className='text-yellow-500' />
                        <div className='flex w-full items-center justify-between'>
                          <span>Payment Methods</span>
                          {isPaymentCollapsed ? (
                            <ChevronDown className='cursor-pointer items-end ' />
                          ) : (
                            <ChevronUp className='cursor-pointer ' />
                          )}
                        </div>
                      </div>
                      {!isPaymentCollapsed && (
                        <div className='flex flex-col gap-2 p-1'>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>VISA</span>
                              <span className='text-yellow-500'>535</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>MasterCard</span>
                              <span className='text-yellow-500'>35</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                            <div className='flex w-full justify-between'>
                              <span>PayPal</span>
                              <span className='text-yellow-500'>12</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className=' p-6'>
                  <div className='  flex flex-col justify-evenly  gap-4'>
                    <div className='mb-4 flex w-full gap-2'>
                      <div className='flex items-center gap-2' onClick={toggleFilterLanguageMobileCollapsed}>
                        <ListFilter className='' />
                        <span className='text-gray-600'>Filter slots by language</span>
                        {isSlotsByLanguageCollapsed ? (
                          <ChevronDown className='cursor-pointer items-end ' />
                        ) : (
                          <ChevronUp className='cursor-pointer ' />
                        )}
                      </div>
                    </div>
                    {!isLanguageMobileCollapsed && (
                      <div className=' mt-4 flex flex-col gap-4'>
                        <div className='flex gap-2' onClick={toggleLanguageCollapse}>
                          <Languages className='text-yellow-500' />
                          <div className='flex w-full items-center justify-between'>
                            <span>Website language</span>
                            {isLanguageCollapsed ? (
                              <ChevronDown className='cursor-pointer items-end ' />
                            ) : (
                              <ChevronUp className='cursor-pointer ' />
                            )}
                          </div>
                        </div>
                        {!isLanguageCollapsed && (
                          <div className='flex flex-col gap-2 p-1'>
                            <div className='flex items-center gap-2'>
                              <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                              <div className='flex w-full justify-between'>
                                <span>English</span>
                                <span className='text-yellow-500'>535</span>
                              </div>
                            </div>
                            <div className='flex items-center gap-2'>
                              <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                              <div className='flex w-full justify-between'>
                                <span>Spanish</span>
                                <span className='text-yellow-500'>35</span>
                              </div>
                            </div>
                            <div className='flex items-center gap-2'>
                              <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                              <div className='flex w-full justify-between'>
                                <span>French</span>
                                <span className='text-yellow-500'>12</span>
                              </div>
                            </div>
                          </div>
                        )}
                        <Separator />
                        <div className='flex gap-2' onClick={toggleCustomerSupportCollapse}>
                          <Headphones className='text-yellow-500' />
                          <div className='flex w-full items-center justify-between'>
                            <span>Customer support language</span>
                            {isCustomerSupportCollapsed ? (
                              <ChevronDown className='cursor-pointer items-end ' />
                            ) : (
                              <ChevronUp className='cursor-pointer ' />
                            )}
                          </div>
                        </div>
                        {!isCustomerSupportCollapsed && (
                          <div className='flex flex-col gap-2 p-1'>
                            <div className='flex items-center gap-2'>
                              <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                              <div className='flex w-full justify-between'>
                                <span>English</span>
                                <span className='text-yellow-500'>535</span>
                              </div>
                            </div>
                            <div className='flex items-center gap-2'>
                              <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                              <div className='flex w-full justify-between'>
                                <span>French</span>
                                <span className='text-yellow-500'>12</span>
                              </div>
                            </div>
                          </div>
                        )}
                        <Separator />
                        <div className='flex gap-2' onClick={toggleLiveChatCollapse}>
                          <MessageSquare className='text-yellow-500' />
                          <div className='flex w-full items-center justify-between'>
                            <span>Live chat language</span>
                            {isLiveChatCollapsed ? (
                              <ChevronDown className='cursor-pointer items-end' />
                            ) : (
                              <ChevronUp className='cursor-pointer ' />
                            )}
                          </div>
                        </div>
                        {!isLiveChatCollapsed && (
                          <div className='flex flex-col gap-2 p-1'>
                            <div className='flex items-center gap-2'>
                              <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                              <div className='flex w-full justify-between'>
                                <span>English</span>
                                <span className='text-yellow-500'>535</span>
                              </div>
                            </div>
                            <div className='flex items-center gap-2'>
                              <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                              <div className='flex w-full justify-between'>
                                <span>French</span>
                                <span className='text-yellow-500'>12</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
      <div className='hidden  space-y-4 lg:flex lg:flex-col'>
        <div className=' custom-background flex  flex-col   rounded-xl border bg-transparent p-8'>
          <div className='flex flex-col space-y-4 '>
            <div className='flex items-center gap-2' onClick={toggleSortOptionsCollapse}>
              <Filter className=' text-gray' />
              <div className='text-gray'>Sort Options</div>
            </div>
            <div className='mt-4 flex flex-col gap-4'>
              <div className='flex cursor-pointer gap-2'>
                <ArrowUpAZ className='text-yellow-500' />
                <div>From A to Z</div>
              </div>
              <div className='flex cursor-pointer  gap-2'>
                <ArrowDownZA className='text-yellow-500' />
                <div>From Z to A</div>
              </div>
              <div className='flex cursor-pointer  gap-2'>
                <Star className='text-yellow-500' />
                <div>Latest reviews</div>
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <Separator />
          </div>
          <div className='mt-12 flex flex-col space-y-4'>
            {/* Popular filters */}
            <div className='mb-4 flex gap-2'>
              <ListFilter className='text-accent' />
              <div className='text-gray-600'>Filter slots</div>
            </div>
            <div className='flex gap-2' onClick={toggleHeartCollapse}>
              <Heart className='text-yellow-500' />
              <div className='flex w-full items-center justify-between'>
                <span>Providers</span>
                {isHeartCollapsed ? (
                  <ChevronDown className='cursor-pointer items-end ' />
                ) : (
                  <ChevronUp className=' cursor-pointer ' />
                )}
              </div>
            </div>
            {!isHeartCollapsed && (
              <div className='flex w-full flex-col justify-center gap-2 p-1'>
                <div>
                  <div className='flex items-center gap-2'>
                    <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                    <div className='flex w-full justify-between'>
                      <span>C</span>
                      {/* <span className='text-yellow-500'>{provider.mobileFriendlySlotsCount}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Separator />
            {/* Country */}
            <div className='flex gap-2' onClick={toggleGlobeCollapse}>
              <Globe className='text-yellow-500' />
              <div className='flex w-full items-center justify-between'>
                <span>Country</span>
                {isGlobeCollapsed ? (
                  <ChevronDown className='cursor-pointer items-end ' />
                ) : (
                  <ChevronUp className='cursor-pointer ' />
                )}
              </div>
            </div>
            {!isGlobeCollapsed && (
              <div className='flex flex-col gap-2 p-1'>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>Mobile-friendly slots</span>
                    <span className='text-yellow-500'>535</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>Crypto slots</span>
                    <span className='text-yellow-500'>35</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>Live slots</span>
                    <span className='text-yellow-500'>12</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>Live dealer slots</span>
                    <span className='text-yellow-500'>4</span>
                  </div>
                </div>
              </div>
            )}
            <Separator />
            {/* Slot Games */}
            <div className='flex gap-2' onClick={toggleSlotCollapse}>
              <Dice4 className='text-yellow-500' />
              <div className='flex w-full items-center justify-between'>
                <span>Slot Games</span>
                {isSlotCollapsed ? (
                  <ChevronDown className='cursor-pointer items-end ' />
                ) : (
                  <ChevronUp className='cursor-pointer ' />
                )}
              </div>
            </div>
            {!isSlotCollapsed && (
              <div className='flex flex-col gap-2 p-1'>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>3 Reel Slots</span>
                    <span className='text-yellow-500'>535</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>5 Reel Slots</span>
                    <span className='text-yellow-500'>35</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>Progressive Jackpots</span>
                    <span className='text-yellow-500'>12</span>
                  </div>
                </div>
              </div>
            )}
            <Separator />
            {/* Payment Methods */}
            <div className='flex gap-2' onClick={togglePaymentCollapse}>
              <Wallet className='text-yellow-500' />
              <div className='flex w-full items-center justify-between'>
                <span>Payment Methods</span>
                {isPaymentCollapsed ? (
                  <ChevronDown className='cursor-pointer items-end ' />
                ) : (
                  <ChevronUp className='cursor-pointer ' />
                )}
              </div>
            </div>
            {!isPaymentCollapsed && (
              <div className='flex flex-col gap-2 p-1'>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>VISA</span>
                    <span className='text-yellow-500'>535</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>MasterCard</span>
                    <span className='text-yellow-500'>35</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>PayPal</span>
                    <span className='text-yellow-500'>12</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='mt-12'>
            <Separator />
          </div>
          <div className='mt-12 flex flex-col space-y-4'>
            <div className='flex items-center gap-2'>
              <ListFilter className='text-accent' />
              <span className='text-gray-600'>Filter slots by language</span>
            </div>
            <div className='flex gap-2' onClick={toggleLanguageCollapse}>
              <Languages className='text-yellow-500' />
              <div className='flex w-full items-center justify-between'>
                <span>Website language</span>
                {isLanguageCollapsed ? (
                  <ChevronDown className='cursor-pointer items-end ' />
                ) : (
                  <ChevronUp className='cursor-pointer ' />
                )}
              </div>
            </div>
            {!isLanguageCollapsed && (
              <div className='flex flex-col gap-2 p-1'>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>English</span>
                    <span className='text-yellow-500'>535</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>Spanish</span>
                    <span className='text-yellow-500'>35</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>French</span>
                    <span className='text-yellow-500'>12</span>
                  </div>
                </div>
              </div>
            )}
            <Separator />
            <div className='flex gap-2' onClick={toggleCustomerSupportCollapse}>
              <Headphones className='text-yellow-500' />
              <div className='flex w-full items-center justify-between'>
                <span>Customer support language</span>
                {isCustomerSupportCollapsed ? (
                  <ChevronDown className='cursor-pointer items-end ' />
                ) : (
                  <ChevronUp className='cursor-pointer ' />
                )}
              </div>
            </div>
            {!isCustomerSupportCollapsed && (
              <div className='flex flex-col gap-2 p-1'>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>English</span>
                    <span className='text-yellow-500'>535</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>French</span>
                    <span className='text-yellow-500'>12</span>
                  </div>
                </div>
              </div>
            )}
            <Separator />
            <div className='flex gap-2' onClick={toggleLiveChatCollapse}>
              <MessageSquare className='text-yellow-500' />
              <div className='flex w-full items-center justify-between'>
                <span>Live chat language</span>
                {isLiveChatCollapsed ? (
                  <ChevronDown className='cursor-pointer items-end' />
                ) : (
                  <ChevronUp className='cursor-pointer ' />
                )}
              </div>
            </div>
            {!isLiveChatCollapsed && (
              <div className='flex flex-col gap-2 p-1'>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>English</span>
                    <span className='text-yellow-500'>535</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' style={{ height: "15px", width: "15px" }} />
                  <div className='flex w-full justify-between'>
                    <span>French</span>
                    <span className='text-yellow-500'>12</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { FiltersCasino }
