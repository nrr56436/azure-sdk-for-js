/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";


export const ResponseBase: msRest.CompositeMapper = {
  serializedName: "ResponseBase",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "_type",
      clientName: "_type"
    },
    uberParent: "ResponseBase",
    className: "ResponseBase",
    modelProperties: {
      _type: {
        required: true,
        serializedName: "_type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Identifiable: msRest.CompositeMapper = {
  serializedName: "Identifiable",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Identifiable",
    modelProperties: {
      ...ResponseBase.type.modelProperties,
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Response: msRest.CompositeMapper = {
  serializedName: "Response",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Response",
    modelProperties: {
      ...Identifiable.type.modelProperties,
      readLink: {
        readOnly: true,
        serializedName: "readLink",
        type: {
          name: "String"
        }
      },
      webSearchUrl: {
        readOnly: true,
        serializedName: "webSearchUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Thing: msRest.CompositeMapper = {
  serializedName: "Thing",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Thing",
    modelProperties: {
      ...Response.type.modelProperties,
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      url: {
        readOnly: true,
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      image: {
        readOnly: true,
        serializedName: "image",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "ImageObject"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      alternateName: {
        readOnly: true,
        serializedName: "alternateName",
        type: {
          name: "String"
        }
      },
      bingId: {
        readOnly: true,
        serializedName: "bingId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreativeWork: msRest.CompositeMapper = {
  serializedName: "CreativeWork",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "CreativeWork",
    modelProperties: {
      ...Thing.type.modelProperties,
      thumbnailUrl: {
        readOnly: true,
        serializedName: "thumbnailUrl",
        type: {
          name: "String"
        }
      },
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "Thing"
            }
          }
        }
      },
      text: {
        readOnly: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaObject: msRest.CompositeMapper = {
  serializedName: "MediaObject",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "MediaObject",
    modelProperties: {
      ...CreativeWork.type.modelProperties,
      contentUrl: {
        readOnly: true,
        serializedName: "contentUrl",
        type: {
          name: "String"
        }
      },
      hostPageUrl: {
        readOnly: true,
        serializedName: "hostPageUrl",
        type: {
          name: "String"
        }
      },
      contentSize: {
        readOnly: true,
        serializedName: "contentSize",
        type: {
          name: "String"
        }
      },
      encodingFormat: {
        readOnly: true,
        serializedName: "encodingFormat",
        type: {
          name: "String"
        }
      },
      hostPageDisplayUrl: {
        readOnly: true,
        serializedName: "hostPageDisplayUrl",
        type: {
          name: "String"
        }
      },
      width: {
        readOnly: true,
        serializedName: "width",
        type: {
          name: "Number"
        }
      },
      height: {
        readOnly: true,
        serializedName: "height",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ImageObject: msRest.CompositeMapper = {
  serializedName: "ImageObject",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageObject",
    modelProperties: {
      ...MediaObject.type.modelProperties,
      thumbnail: {
        readOnly: true,
        serializedName: "thumbnail",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "ImageObject"
        }
      },
      imageInsightsToken: {
        readOnly: true,
        serializedName: "imageInsightsToken",
        type: {
          name: "String"
        }
      },
      imageId: {
        readOnly: true,
        serializedName: "imageId",
        type: {
          name: "String"
        }
      },
      accentColor: {
        readOnly: true,
        serializedName: "accentColor",
        type: {
          name: "String"
        }
      },
      visualWords: {
        readOnly: true,
        serializedName: "visualWords",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Answer: msRest.CompositeMapper = {
  serializedName: "Answer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Answer",
    modelProperties: {
      ...Response.type.modelProperties
    }
  }
};

export const SearchResultsAnswer: msRest.CompositeMapper = {
  serializedName: "SearchResultsAnswer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "SearchResultsAnswer",
    modelProperties: {
      ...Answer.type.modelProperties,
      totalEstimatedMatches: {
        readOnly: true,
        serializedName: "totalEstimatedMatches",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Images: msRest.CompositeMapper = {
  serializedName: "Images",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Images",
    modelProperties: {
      ...SearchResultsAnswer.type.modelProperties,
      nextOffset: {
        readOnly: true,
        serializedName: "nextOffset",
        type: {
          name: "Number"
        }
      },
      value: {
        required: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "ImageObject"
            }
          }
        }
      }
    }
  }
};

export const Query: msRest.CompositeMapper = {
  serializedName: "Query",
  type: {
    name: "Composite",
    className: "Query",
    modelProperties: {
      text: {
        required: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      displayText: {
        readOnly: true,
        serializedName: "displayText",
        type: {
          name: "String"
        }
      },
      webSearchUrl: {
        readOnly: true,
        serializedName: "webSearchUrl",
        type: {
          name: "String"
        }
      },
      searchLink: {
        readOnly: true,
        serializedName: "searchLink",
        type: {
          name: "String"
        }
      },
      thumbnail: {
        readOnly: true,
        serializedName: "thumbnail",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "ImageObject"
        }
      }
    }
  }
};

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        defaultValue: 'None',
        type: {
          name: "String"
        }
      },
      subCode: {
        readOnly: true,
        serializedName: "subCode",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      moreDetails: {
        readOnly: true,
        serializedName: "moreDetails",
        type: {
          name: "String"
        }
      },
      parameter: {
        readOnly: true,
        serializedName: "parameter",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ErrorResponse",
    modelProperties: {
      ...Response.type.modelProperties,
      errors: {
        required: true,
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorModel"
            }
          }
        }
      }
    }
  }
};

export const WebPage: msRest.CompositeMapper = {
  serializedName: "WebPage",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "WebPage",
    modelProperties: {
      ...CreativeWork.type.modelProperties
    }
  }
};

export const discriminators = {
  'ResponseBase.ImageObject' : ImageObject,
  'ResponseBase.Images' : Images,
  'ResponseBase.SearchResultsAnswer' : SearchResultsAnswer,
  'ResponseBase.Answer' : Answer,
  'ResponseBase.MediaObject' : MediaObject,
  'ResponseBase.Response' : Response,
  'ResponseBase.Thing' : Thing,
  'ResponseBase.CreativeWork' : CreativeWork,
  'ResponseBase.Identifiable' : Identifiable,
  'ResponseBase.ErrorResponse' : ErrorResponse,
  'ResponseBase.WebPage' : WebPage,
  'ResponseBase' : ResponseBase
};
