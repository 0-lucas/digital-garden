'use strict';

var Extensions = require('../../../extensions/Extensions.js');
var GlParticleContainerAdaptor = require('../gl/GlParticleContainerAdaptor.js');
var ParticleContainerPipe = require('./ParticleContainerPipe.js');

"use strict";
class GlParticleContainerPipe extends ParticleContainerPipe.ParticleContainerPipe {
  constructor(renderer) {
    super(renderer, new GlParticleContainerAdaptor.GlParticleContainerAdaptor());
  }
}
/** @ignore */
GlParticleContainerPipe.extension = {
  type: [
    Extensions.ExtensionType.WebGLPipes
  ],
  name: "particle"
};

exports.GlParticleContainerPipe = GlParticleContainerPipe;
//# sourceMappingURL=GlParticleContainerPipe.js.map
