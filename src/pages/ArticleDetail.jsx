import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ArticleDetail() {
  const params = useParams();

  return (
    <Container className="mt-3">
      <h1>Article {params.id}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla
        est ipsum tenetur cumque fugiat sequi rem, in nostrum reprehenderit
        itaque odio, cum quam repellat eveniet officiis iste dolor cupiditate?
      </p>
    </Container>
  );
}

export default ArticleDetail;
