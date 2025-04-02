import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import BusinessPartner from './businessPartner'
import FlagSupplier from './flagSupplier'
import NewsLog from './newsLog'
import PartnerMetrics from './partnerMetrics'
import PartnerModelMapperMethods from './partnerModelMapper'
import PartnerRisk from './partnerRisks'
import Partners from './partners'
import PartnerStatus from './partnerStatus'
import PerformanceOverview from './performanceOverview'
import Relationships from './relationships'
import StrategyAndGovernance from './strategyAndGovernance'
import SupplierInsights from './supplierInsights'
import Sustainability from './sustainability'


const PartnerTabs = () => {
  return (
    <Tabs defaultValue="partner-area">
            <TabsList>
              <TabsTrigger value="business-partner">Business Partner</TabsTrigger>
              <TabsTrigger value="flag-supplier">Flag Supplier</TabsTrigger>
              <TabsTrigger value="news-log">News Log</TabsTrigger>
              <TabsTrigger value="partner-metrics">Partner Metrics</TabsTrigger>
              <TabsTrigger value="partner-model-mapper">Partner Model Mapper</TabsTrigger>
              <TabsTrigger value="partner-risks">Partner Risks</TabsTrigger>
              <TabsTrigger value="partners">Partners</TabsTrigger>
              <TabsTrigger value="partner-status">Partner Status</TabsTrigger>
              <TabsTrigger value="performance-overview">Performance Overview</TabsTrigger>
              <TabsTrigger value="relationships">Relationships</TabsTrigger>
              <TabsTrigger value="strategy-and-governance">Strategy & Governance</TabsTrigger>
              <TabsTrigger value="supplier-insights">Supplier Insights</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            </TabsList>
            <TabsContent value="business-partner">
                <BusinessPartner />
            </TabsContent>
            <TabsContent value="flag-supplier">
                <FlagSupplier />
            </TabsContent>
            <TabsContent value="news-log">
                <NewsLog />
            </TabsContent>
            <TabsContent value="partner-metrics">
                <PartnerMetrics />
            </TabsContent>
            <TabsContent value="partner-model-mapper">
                <PartnerModelMapperMethods />
            </TabsContent>
            <TabsContent value="partner-risks">
                <PartnerRisk />
            </TabsContent>
            <TabsContent value="partners">
                <Partners />
            </TabsContent>
            <TabsContent value="partner-status">
                <PartnerStatus />
            </TabsContent>
            <TabsContent value="performance-overview">
                <PerformanceOverview />
            </TabsContent>
            <TabsContent value="relationships">
                <Relationships />
            </TabsContent>
            <TabsContent value="strategy-and-governance">
                <StrategyAndGovernance />
            </TabsContent>
            <TabsContent value="supplier-insights">
                <SupplierInsights />
            </TabsContent>
            <TabsContent value="sustainability">
                <Sustainability />
            </TabsContent>
          </Tabs>
  )
}

export default PartnerTabs