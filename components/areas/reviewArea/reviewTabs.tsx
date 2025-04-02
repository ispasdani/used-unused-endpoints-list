import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import Survey from './reviewArea'
import Review from './reviews'
import Surveys from './survey'

const ReviewTabs = () => {
  return (
    <Tabs defaultValue="review-tabs">
            <TabsList>
              <TabsTrigger value="automated-surveys">Automated Reviews</TabsTrigger>
              <TabsTrigger value="reviews">Review</TabsTrigger>
              <TabsTrigger value="surveys">Surveys</TabsTrigger>
            </TabsList>
            <TabsContent value="automated-surveys">
                <Survey />
            </TabsContent>
            <TabsContent value="reviews">
                <Review />
            </TabsContent>
            <TabsContent value="surveys">
                <Surveys />
            </TabsContent>
          </Tabs>
  )
}

export default ReviewTabs