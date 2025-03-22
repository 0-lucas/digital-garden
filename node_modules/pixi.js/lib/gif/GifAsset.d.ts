import { type GifBufferOptions, GifSource } from './GifSource';
import type { AssetExtension } from '../assets/AssetExtension';
/**
 * Handle the loading of GIF images. Registering this loader plugin will
 * load all `.gif` images as an ArrayBuffer and transform into an
 * GifSource object.
 * @memberof gif
 */
declare const GifAsset: AssetExtension<GifSource, GifBufferOptions>;
export { GifAsset };
