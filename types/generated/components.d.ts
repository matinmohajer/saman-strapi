import type { Schema, Struct } from '@strapi/strapi';

export interface SharedStory extends Struct.ComponentSchema {
  collectionName: 'components_shared_stories';
  info: {
    displayName: 'story';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    image_mobile: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    section_title: Schema.Attribute.String;
    story_text: Schema.Attribute.Component<'shared.story-text', true>;
  };
}

export interface SharedStoryText extends Struct.ComponentSchema {
  collectionName: 'components_shared_story_texts';
  info: {
    displayName: 'story_text';
  };
  attributes: {
    author: Schema.Attribute.String;
    paragraph: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.story': SharedStory;
      'shared.story-text': SharedStoryText;
    }
  }
}
