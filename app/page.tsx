import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActionArea from "@/components/areas/actionArea";
import ActivityArea from "@/components/areas/activityArea";
import AdminTabs from "@/components/areas/adminArea/adminTabs";
import Dashboard from "@/components/areas/analytics";
import Kpi from "@/components/areas/kpi";
import CommodityCategory from "@/components/areas/comodityCategory";
import Common from "@/components/areas/common";
import AdminCompany from "@/components/areas/adminArea/adminCompany";
import CompanyTabs from "@/components/areas/companyArea/companyTabs";
import ComplianceTabs from "@/components/areas/complianceArea/complianceTabs";
import Contact from "@/components/areas/contact";
import DevelopmentPlan from "@/components/areas/developmentPlan";
import FileTabs from "@/components/areas/fileArea/fileTabs";
import GovernanceTabs from "@/components/areas/governance/governance";
import Link from "next/link";
import Links from "@/components/areas/link";
import Ncr from "@/components/areas/ncrs";
import Notification from "@/components/areas/notificationArea";
import Owler from "@/components/areas/owlerArea";
import PartnerTabs from "@/components/areas/partner/partnerTabs";
import Performance from "@/components/areas/performance";
import PowerBi from "@/components/areas/powerbi";
import Product from "@/components/areas/products";
import Survey from "@/components/areas/reviewArea/reviewArea";
import ReviewTabs from "@/components/areas/reviewArea/reviewTabs";
import Risks from "@/components/areas/riskArea";
import Scorecard from "@/components/areas/scorecard";
import Segmentation from "@/components/areas/segmentation";
import SelfAssessment from "@/components/areas/selfAssessmentArea";
import SupplierPortal from "@/components/areas/supplierPortal";
import UserLandingPage from "@/components/areas/userLanding";
import UserAreaTabs from "@/components/areas/userArea/userAreaTabs";


export default function Home() {


  return (
    <main className="p-4">
      <Tabs defaultValue="action" className="w-full">
        <TabsList className="inline-flex w-max min-w-full h-auto p-1 bg-gray-100 rounded-lg gap-1 flex-wrap w-full">
          <TabsTrigger value="action">Action</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="adminArea">Admin Area</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="kpi">KPI</TabsTrigger>
          <TabsTrigger value="comodity-category">Comodity Category</TabsTrigger>
          <TabsTrigger value="common">Common</TabsTrigger>
          <TabsTrigger value="company-area">Company Area</TabsTrigger>
          <TabsTrigger value="compliance-area">Compliance Area</TabsTrigger>
          <TabsTrigger value="contact-area">Contact Area</TabsTrigger>
          <TabsTrigger value="development-plan">Development Plan</TabsTrigger>
          <TabsTrigger value="file-area">File Area</TabsTrigger>
          <TabsTrigger value="governance-area">Governance Area</TabsTrigger>
          <TabsTrigger value="link">Link</TabsTrigger>
          <TabsTrigger value="ncrs">NCRS</TabsTrigger>
          <TabsTrigger value="notification-area">Notification Area</TabsTrigger>
          <TabsTrigger value="owler-area">Owler Area</TabsTrigger>
          <TabsTrigger value="partner-area">Partner Area</TabsTrigger>
          <TabsTrigger value="performance-area">Performance Area</TabsTrigger>
          <TabsTrigger value="powerbi">PowerBi</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="review-tabs">Review Area</TabsTrigger>
          <TabsTrigger value="risk-area">Risk Area</TabsTrigger>
          <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
          <TabsTrigger value="segmentation">Segmentation</TabsTrigger>
          <TabsTrigger value="self-assessment-area">Self Assessment Area</TabsTrigger>
          <TabsTrigger value="supplier-portal">Supplier Portal</TabsTrigger>
          <TabsTrigger value="user-landing">User Landing</TabsTrigger>
          <TabsTrigger value="user-area">User Area</TabsTrigger>
        </TabsList>
        <TabsContent value="action">
         <ActionArea />
        </TabsContent>
        <TabsContent value="activity">
         <ActivityArea />
        </TabsContent>
        <TabsContent value="adminArea" style={{paddingLeft: "20px"}}>
         <AdminTabs />
        </TabsContent>
        <TabsContent value="analytics">
         <Dashboard/>
        </TabsContent>
        <TabsContent value="kpi">
         <Kpi/>
        </TabsContent>
        <TabsContent value="comodity-category">
         <CommodityCategory />
        </TabsContent>
        <TabsContent value="common">
         <Common />
        </TabsContent>
        <TabsContent value="company-area" style={{paddingLeft: "20px"}}>
         <CompanyTabs />
        </TabsContent>
        <TabsContent value="compliance-area" style={{paddingLeft: "20px"}}>
         <ComplianceTabs />
        </TabsContent>
        <TabsContent value="contact-area">
         <Contact />
        </TabsContent>
        <TabsContent value="development-plan">
         <DevelopmentPlan />
        </TabsContent>
        <TabsContent value="file-area" style={{paddingLeft: "20px"}}>
          <FileTabs />
        </TabsContent>
        <TabsContent value="governance-area" style={{paddingLeft: "20px"}}>
          <GovernanceTabs />
        </TabsContent>
        <TabsContent value="link">
          <Links />
        </TabsContent>
        <TabsContent value="ncrs">
          <Ncr />
        </TabsContent>
        <TabsContent value="notification-area">
          <Notification />
        </TabsContent>
        <TabsContent value="owler-area">
          <Owler />
        </TabsContent>
        <TabsContent value="partner-area" style={{paddingLeft: "20px"}}>
          <PartnerTabs />
        </TabsContent>
        <TabsContent value="performance-area">
          <Performance />
        </TabsContent>
        <TabsContent value="powerbi">
          <PowerBi />
        </TabsContent>
        <TabsContent value="products">
          <Product />
        </TabsContent>
        <TabsContent value="review-tabs" style={{paddingLeft: "20px"}}>
          <ReviewTabs/>
        </TabsContent>
        <TabsContent value="risk-area">
          <Risks />
        </TabsContent>
        <TabsContent value="scorecard">
          <Scorecard />
        </TabsContent>
        <TabsContent value="segmentation">
          <Segmentation />
        </TabsContent>
        <TabsContent value="self-assessment-area">
          <SelfAssessment />
        </TabsContent>
        <TabsContent value="supplier-portal">
          <SupplierPortal />
        </TabsContent>
        <TabsContent value="user-landing">
          <UserLandingPage />
        </TabsContent>
        <TabsContent value="user-area" style={{paddingLeft: "20px"}}>
          <UserAreaTabs />
        </TabsContent>
      </Tabs>
    </main>
  );
}
