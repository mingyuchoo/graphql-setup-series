import { createTestContext } from './__helpers';

const context = createTestContext();

it('ensures that a draft can be created and published', async () => {
  // Create a new draft
  const draftResult = await context.client.request(
    `
      mutation {
        createDraft(title: "Nexus", content: "Declarative, Code-First GraphQL Schemas for JavaScript/TypeScript") {
          id
          title
          content
          published
        }
      }
    `
  );
  // Snapshot that draft and expect `published` to be false
  expect(draftResult).toMatchInlineSnapshot(`
    Object {
      "createDraft": Object {
        "content": "Declarative, Code-First GraphQL Schemas for JavaScript/TypeScript",
        "id": 1,
        "published": false,
        "title": "Nexus",
      },
    }
  `);
  // Publish the previously created draft
  const publishResult = await context.client.request(
    `
    mutation publishDraft($draftId: Int!) {
      publish(draftId: $draftId) {
        id
        title
        content
        published
      }
    }
    `,
    { draftId: draftResult.createDraft.id }
  );
  // Snapshot the published draft and expect `published` to be true
  expect(publishResult).toMatchInlineSnapshot(`
    Object {
      "publish": Object {
        "content": "Declarative, Code-First GraphQL Schemas for JavaScript/TypeScript",
        "id": 1,
        "published": true,
        "title": "Nexus",
      },
    }
  `);
});
