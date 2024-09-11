'use client'
import { useRouter, usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'

interface ITabController {
    tabsList: Array<TabItem>
}

export interface TabItem {
    navigateTo: string,
    title: string,
}

const TabController: React.FC<ITabController> = ({ tabsList }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [indexOfActiveTab, setIndexOfActiveTab] = useState<number>(-1)

    useEffect(() => {
        tabsList.forEach((tab, index) => {
            if (tab.navigateTo === pathname) { setIndexOfActiveTab(index) }
        })
    }, [pathname, tabsList])

    const changeActiveTab = useCallback((indexOfActivatedTab: number) => {
        setIndexOfActiveTab(indexOfActivatedTab)
    }, [])

    return (
        <div role="tablist" className="tabs tabs-boxed fixed bottom-0 right-0 left-0">
            {tabsList.map((tab, index) =>
                <a
                    role="tab"
                    className={`tab ${indexOfActiveTab === index ? 'tab-active' : ''}`}
                    key={index}
                    onClick={() => {
                        changeActiveTab(index)
                        router.push(`${tab.navigateTo}`)
                    }}
                >
                    {tab.title}
                </a>
            )}
        </div >
    )
}

export default TabController