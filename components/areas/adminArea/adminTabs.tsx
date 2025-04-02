import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import AdminCompany from './adminCompany'
import AdminCompliance from './adminCompliance'
import AdminContact from './adminContact'
import AdminDevelopmentPlan from './adminDevelopmentPlan'
import AdminExport from './adminExports'
import AdminGovernance from './adminGovernance'
import AdminKpi from './adminKpi'
import AdminNcr from './adminNcr'
import AdminPartner from './adminPartner'
import AdminPerformanceSettings from './adminPerformanceSettings'
import AdminReview from './adminReview'
import AdminScorecard from './adminScorecard'
import AdminSegmentation from './adminSegmentation'
import AdminShortcutSettings from './adminShortcutSettings'
import AdminSupplierProfileSettings from './adminSupplierProfileSettings'
import AdminUser from './adminUser'

const AdminTabs = () => {
  return (
    <Tabs defaultValue="admin-company">
            <TabsList>
              <TabsTrigger value="admin-company">Admin Company</TabsTrigger>
              <TabsTrigger value="admin-compliance">Admin Compliance</TabsTrigger>
              <TabsTrigger value="admin-contact">Admin Contact</TabsTrigger>
              <TabsTrigger value="admin-development-plan">Admin Development Plan</TabsTrigger>
              <TabsTrigger value="admin-exports">Admin Exports</TabsTrigger>
              <TabsTrigger value="admin-governance">Admin Governance</TabsTrigger>
              <TabsTrigger value="admin-kpi">Admin Kpi</TabsTrigger>
              <TabsTrigger value="admin-ncr">Admin Ncr</TabsTrigger>
              <TabsTrigger value="admin-partner">Admin Partner</TabsTrigger>
              <TabsTrigger value="admin-performance-settings">Admin Performance Settings</TabsTrigger>
              <TabsTrigger value="admin-review">Admin Review</TabsTrigger>
              <TabsTrigger value="admin-scorecard">Admin Scorecard</TabsTrigger>
              <TabsTrigger value="admin-segmentation">Admin Segmentation</TabsTrigger>
              <TabsTrigger value="admin-shortcut-settings">Admin Shortcut Settings</TabsTrigger>
              <TabsTrigger value="admin-supplier-profile-settings">Admin Supplier Profile Settings</TabsTrigger>
              <TabsTrigger value="admin-user">Admin User</TabsTrigger>
            </TabsList>
            <TabsContent value="admin-company">
              <AdminCompany />
            </TabsContent>
            <TabsContent value="admin-compliance">
              <AdminCompliance />
            </TabsContent>
            <TabsContent value="admin-contact">
             <AdminContact />
            </TabsContent>
            <TabsContent value="admin-development-plan">
             <AdminDevelopmentPlan />
            </TabsContent>
            <TabsContent value="admin-exports">
             <AdminExport />
            </TabsContent>
            <TabsContent value="admin-governance">
             <AdminGovernance />
            </TabsContent>
            <TabsContent value="admin-kpi">
             <AdminKpi />
            </TabsContent>
            <TabsContent value="admin-ncr">
             <AdminNcr />
            </TabsContent>
            <TabsContent value="admin-partner">
             <AdminPartner />
            </TabsContent>
            <TabsContent value="admin-performance-settings">
             <AdminPerformanceSettings />
            </TabsContent>
            <TabsContent value="admin-review">
             <AdminReview />
            </TabsContent>
            <TabsContent value="admin-scorecard">
             <AdminScorecard />
            </TabsContent>
            <TabsContent value="admin-segmentation">
             <AdminSegmentation />
            </TabsContent>
            <TabsContent value="admin-shortcut-settings">
             <AdminShortcutSettings />
            </TabsContent>
            <TabsContent value="admin-supplier-profile-settings">
             <AdminSupplierProfileSettings />
            </TabsContent>
            <TabsContent value="admin-user">
             <AdminUser />
            </TabsContent>
            
          </Tabs>
  )
}

export default AdminTabs