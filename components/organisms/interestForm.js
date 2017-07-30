import React from 'react'
import { Flex, Box } from 'grid-styled'

import {
  Form,
  FormTitle,
  FormSubheading,
  FormField,
  Input } from '../atoms/form'

function InterestForm() {
  return (
    <Form>
      <Flex>
        <Box>
          <FormTitle>Android User?</FormTitle>
          <FormSubheading>Get notified when we finish developing our android app.</FormSubheading>
          <FormField>
            <Input type="email" placeholder="Enter your email address" name="email" />
          </FormField>
          <Flex justify="space-between">
            <Box>
              <FormField>
                <Input type="text" placeholder="First Name" name="firstname" />
              </FormField>
            </Box>
            <Box>
              <FormField>
                <Input type="text" placeholder="Last name" name="lastname" />
              </FormField>
            </Box>
          </Flex>
          <Flex justify="flex-end">
            <Box width={1/2}>
              <FormField>
                <Input type="submit" value="Request Invite" />
              </FormField>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Form>
  )
}

export default InterestForm
