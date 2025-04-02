import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import File from './file'
import Folder from './folder'


const FileTabs = () => {
  return (
    <Tabs defaultValue="file-area">
            <TabsList>
              <TabsTrigger value="file">File</TabsTrigger>
              <TabsTrigger value="folder">Folder</TabsTrigger>
            </TabsList>
            <TabsContent value="file">
                <File />
            </TabsContent>
            <TabsContent value="folder">
                <Folder />
            </TabsContent>
          </Tabs>
  )
}

export default FileTabs