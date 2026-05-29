import { Container, ContentWrapper, Title, Message, ButtonLink } from './styles';

const NotFound = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>
          404
        </Title>
        <Message>
          Sorry, the page you are looking for does not exist.
        </Message>
        <ButtonLink href="/">
          Back to Home
        </ButtonLink>
      </ContentWrapper>
    </Container>
  );
};

export default NotFound;