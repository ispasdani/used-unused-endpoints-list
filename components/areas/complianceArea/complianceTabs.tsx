import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import Compliance from './compliance'
import ComplianceStatus from './complianceStatus'
import ComplianceTemplate from './complianceTemplate'
import Matrix from './matrix'
import Request from './request'

const ComplianceTabs = () => {
  return (
    <Tabs defaultValue="compliance-area">
            <TabsList>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="compliance-status">Compliance Status</TabsTrigger>
              <TabsTrigger value="compliance-template">Compliance Template</TabsTrigger>
              <TabsTrigger value="matrix">Matrix</TabsTrigger>
              <TabsTrigger value="request">Request</TabsTrigger>
            </TabsList>
            <TabsContent value="compliance">
                <Compliance />
            </TabsContent>
            <TabsContent value="compliance-status">
                <ComplianceStatus />
            </TabsContent>
            <TabsContent value="compliance-template">
                <ComplianceTemplate />
            </TabsContent>
            <TabsContent value="matrix">
                <Matrix />
            </TabsContent>
            <TabsContent value="request">
                <Request />
            </TabsContent>
          </Tabs>
  )
}

export default ComplianceTabs