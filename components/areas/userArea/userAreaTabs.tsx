import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import ColumnFilters from './columnFilter'
import Contacts from './contacts'
import ListView from './listView'
import UIViewSetting from './uiViewSettings'
import UserAccount from './userAccount'
import UserSettings from './userSettings'
import UserTableSize from './userTableSize'


const UserAreaTabs = () => {
  return (
    <Tabs defaultValue="user-area">
            <TabsList>
              <TabsTrigger value="column-filter">Column Filter</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="list-view">List View</TabsTrigger>
              <TabsTrigger value="ui-view-settings">UI View Settings</TabsTrigger>
              <TabsTrigger value="user-account">User Account</TabsTrigger>
              <TabsTrigger value="user-settings">User Settings</TabsTrigger>
              <TabsTrigger value="user-table-size">User Table Size</TabsTrigger>
            </TabsList>
            <TabsContent value="column-filter">
             <ColumnFilters />
            </TabsContent>
            <TabsContent value="contacts">
             <Contacts />
            </TabsContent>
            <TabsContent value="list-view">
             <ListView />
            </TabsContent>
            <TabsContent value="ui-view-settings">
             <UIViewSetting />
            </TabsContent>
            <TabsContent value="user-account">
             <UserAccount />
            </TabsContent>
            <TabsContent value="user-settings">
             <UserSettings />
            </TabsContent>
            <TabsContent value="user-table-size">
             <UserTableSize />
            </TabsContent>
          </Tabs>
  )
}

export default UserAreaTabs