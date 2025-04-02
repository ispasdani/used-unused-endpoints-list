import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import GovernanceTasks from './governanceTasks'
import MeetingForums from './meetingForums'
import MeetingMinutes from './meetingMinutes'

const GovernanceTabs = () => {
  return (
    <Tabs defaultValue="governance-area">
            <TabsList>
              <TabsTrigger value="governance-tasks">Governance Tasks</TabsTrigger>
              <TabsTrigger value="meeting-forums">Meeting Forums</TabsTrigger>
              <TabsTrigger value="meeting-minutes">Meeting Minutes</TabsTrigger>
            </TabsList>
            <TabsContent value="governance-tasks">
                <GovernanceTasks />
            </TabsContent>
            <TabsContent value="meeting-forums">
                <MeetingForums />
            </TabsContent>
            <TabsContent value="meeting-minutes">
                <MeetingMinutes />
            </TabsContent>
          </Tabs>
  )
}

export default GovernanceTabs