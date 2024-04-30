import { Box, Flex, Text, Heading, Button, Input, Textarea, VStack } from '@chakra-ui/react';
import { FaCheckCircle, FaUserCircle } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading as="h1" size="2xl" mb={6}>Welcome to GPT Engineer</Heading>
        <Text fontSize="xl" mb={6}>Revolutionizing web development with AI.</Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </Flex>
      <Box bg="gray.100" p={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>Features</Heading>
        <VStack spacing={5}>
          <Feature title="AI-Driven Development" icon={FaCheckCircle}>
            Harness the power of artificial intelligence to optimize your development process.
          </Feature>
          <Feature title="Real-Time Collaboration" icon={FaCheckCircle}>
            Collaborate in real-time with your team, wherever they are.
          </Feature>
          <Feature title="Integrated Testing" icon={FaCheckCircle}>
            Automatically test your applications as you build them.
          </Feature>
        </VStack>
      </Box>
      <Box p={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>Testimonials</Heading>
        <Flex justify="space-around">
          <Testimonial author="Jane Doe" position="CEO at Tech Innovations">
            "GPT Engineer has transformed the way we build software. It's fast, efficient, and reliable."
          </Testimonial>
          <Testimonial author="John Smith" position="Lead Developer at DevWorks">
            "The AI features are incredibly powerful and have significantly reduced our development time."
          </Testimonial>
        </Flex>
      </Box>
      <Box bg="gray.100" p={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>Contact Us</Heading>
        <Flex direction="column" align="center" justify="center">
          <Input placeholder="Your Name" mb={3} />
          <Input placeholder="Your Email" mb={3} />
          <Textarea placeholder="Your Message" mb={3} />
          <Button colorScheme="blue">Send Message</Button>
        </Flex>
      </Box>
    </Box>
  );
};

const Feature = ({ title, icon, children }) => (
  <Flex align="center">
    <Box as={icon} size="24px" color="green.500" mr={2} />
    <Box>
      <Text fontWeight="bold">{title}</Text>
      <Text>{children}</Text>
    </Box>
  </Flex>
);

const Testimonial = ({ author, position, children }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
    <Text mb={2}>{children}</Text>
    <Flex align="center">
      <Box as={FaUserCircle} size="24px" mr={2} />
      <Text fontWeight="bold">{author}</Text>
      <Text fontSize="sm" ml={1}>({position})</Text>
    </Flex>
  </Box>
);

export default Index;