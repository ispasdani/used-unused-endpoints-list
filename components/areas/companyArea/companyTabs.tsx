import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import Company from './company'
import CompanyAuthenticationSettings from './companyAuthenticationSettings'
import CompanySettings from './companySettings'
import SupplierAccessSettings from './supplierAccessSettings'


const CompanyTabs = () => {
  return (
    <Tabs defaultValue="company-area">
            <TabsList>
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="company-authentication-settings">Company Authentication Settings</TabsTrigger>
              <TabsTrigger value="company-settings">Company Settings</TabsTrigger>
              <TabsTrigger value="supplier-access-settings">Supplier Access Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="company">
              <Company />
            </TabsContent>
            <TabsContent value="company-authentication-settings">
              <CompanyAuthenticationSettings />
            </TabsContent>
            <TabsContent value="company-settings">
              <CompanySettings />
            </TabsContent>
            <TabsContent value="supplier-access-settings">
              <SupplierAccessSettings />
            </TabsContent>
          </Tabs>
  )
}

export default CompanyTabs