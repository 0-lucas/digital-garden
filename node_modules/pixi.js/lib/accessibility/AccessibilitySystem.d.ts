import { ExtensionType } from '../extensions/Extensions';
import type { System } from '../rendering/renderers/shared/system/System';
import type { Renderer } from '../rendering/renderers/types';
import type { isMobileResult } from '../utils/browser/isMobile';
/** @ignore */
export interface AccessibilitySystemOptions {
    accessibilityOptions?: AccessibilityOptions;
}
/** @ignore */
export interface AccessibilityOptions {
    /** Whether to enable accessibility features on initialization instead of waiting for tab key */
    enabledByDefault?: boolean;
    /** Whether to visually show the accessibility divs for debugging */
    debug?: boolean;
    /** Whether to allow tab key press to activate accessibility features */
    activateOnTab?: boolean;
    /** Whether to deactivate accessibility when mouse moves */
    deactivateOnMouseMove?: boolean;
}
/**
 * The Accessibility system provides screen reader and keyboard navigation support for PixiJS content.
 * It creates an accessible DOM layer over the canvas that can be controlled programmatically or through user interaction.
 *
 * By default, the system activates when users press the tab key. This behavior can be customized through options:
 * ```js
 * const app = new Application({
 *     accessibilityOptions: {
 *         enabledByDefault: true,    // Enable immediately instead of waiting for tab
 *         activateOnTab: false,      // Disable tab key activation
 *         debug: false,               // Show/hide accessibility divs
 *         deactivateOnMouseMove: false, // Prevent accessibility from being deactivated when mouse moves
 *     }
 * });
 * ```
 *
 * The system can also be controlled programmatically:
 * ```js
 * app.renderer.accessibility.setAccessibilityEnabled(true);
 * ```
 *
 * To make individual containers accessible:
 * ```js
 * container.accessible = true;
 * ```
 *
 * An instance of this class is automatically created at `renderer.accessibility`
 * @memberof accessibility
 */
export declare class AccessibilitySystem implements System<AccessibilitySystemOptions> {
    private readonly _mobileInfo;
    /** @ignore */
    static extension: {
        readonly type: readonly [ExtensionType.WebGLSystem, ExtensionType.WebGPUSystem];
        readonly name: "accessibility";
    };
    /** default options used by the system */
    static defaultOptions: AccessibilityOptions;
    /** Whether accessibility divs are visible for debugging */
    debug: boolean;
    /** Whether to activate on tab key press */
    private _activateOnTab;
    /** Whether to deactivate accessibility when mouse moves */
    private _deactivateOnMouseMove;
    /**
     * The renderer this accessibility manager works for.
     * @type {WebGLRenderer|WebGPURenderer}
     */
    private _renderer;
    /** Internal variable, see isActive getter. */
    private _isActive;
    /** Internal variable, see isMobileAccessibility getter. */
    private _isMobileAccessibility;
    /** Button element for handling touch hooks. */
    private _hookDiv;
    /** This is the dom element that will sit over the PixiJS element. This is where the div overlays will go. */
    private _div;
    /** A simple pool for storing divs. */
    private _pool;
    /** This is a tick used to check if an object is no longer being rendered. */
    private _renderId;
    /** The array of currently active accessible items. */
    private _children;
    /** Count to throttle div updates on android devices. */
    private _androidUpdateCount;
    /**  The frequency to update the div elements. */
    private readonly _androidUpdateFrequency;
    /**
     * @param {WebGLRenderer|WebGPURenderer} renderer - A reference to the current renderer
     */
    constructor(renderer: Renderer, _mobileInfo?: isMobileResult);
    /**
     * Value of `true` if accessibility is currently active and accessibility layers are showing.
     * @member {boolean}
     * @readonly
     */
    get isActive(): boolean;
    /**
     * Value of `true` if accessibility is enabled for touch devices.
     * @member {boolean}
     * @readonly
     */
    get isMobileAccessibility(): boolean;
    get hookDiv(): HTMLElement;
    /**
     * Creates the touch hooks.
     * @private
     */
    private _createTouchHook;
    /**
     * Destroys the touch hooks.
     * @private
     */
    private _destroyTouchHook;
    /**
     * Activating will cause the Accessibility layer to be shown.
     * This is called when a user presses the tab key.
     * @private
     */
    private _activate;
    private _initAccessibilitySetup;
    /**
     * Deactivates the accessibility system. Removes listeners and accessibility elements.
     * @private
     */
    private _deactivate;
    /**
     * This recursive function will run through the scene graph and add any new accessible objects to the DOM layer.
     * @private
     * @param {Container} container - The Container to check.
     */
    private _updateAccessibleObjects;
    /**
     * Runner init called, view is available at this point.
     * @ignore
     */
    init(options?: AccessibilitySystemOptions): void;
    /**
     * Updates the accessibility layer during rendering.
     * - Removes divs for containers no longer in the scene
     * - Updates the position and dimensions of the root div
     * - Updates positions of active accessibility divs
     * Only fires while the accessibility system is active.
     * @ignore
     */
    postrender(): void;
    /**
     * private function that will visually add the information to the
     * accessibility div
     * @param {HTMLElement} div -
     */
    private _updateDebugHTML;
    /**
     * Adjust the hit area based on the bounds of a display object
     * @param {Rectangle} hitArea - Bounds of the child
     */
    private _capHitArea;
    /**
     * Creates or reuses a div element for a Container and adds it to the accessibility layer.
     * Sets up ARIA attributes, event listeners, and positioning based on the container's properties.
     * @private
     * @param {Container} container - The child to make accessible.
     */
    private _addChild;
    /**
     * Dispatch events with the EventSystem.
     * @param e
     * @param type
     * @private
     */
    private _dispatchEvent;
    /**
     * Maps the div button press to pixi's EventSystem (click)
     * @private
     * @param {MouseEvent} e - The click event.
     */
    private _onClick;
    /**
     * Maps the div focus events to pixi's EventSystem (mouseover)
     * @private
     * @param {FocusEvent} e - The focus event.
     */
    private _onFocus;
    /**
     * Maps the div focus events to pixi's EventSystem (mouseout)
     * @private
     * @param {FocusEvent} e - The focusout event.
     */
    private _onFocusOut;
    /**
     * Is called when a key is pressed
     * @private
     * @param {KeyboardEvent} e - The keydown event.
     */
    private _onKeyDown;
    /**
     * Is called when the mouse moves across the renderer element
     * @private
     * @param {MouseEvent} e - The mouse event.
     */
    private _onMouseMove;
    /** Destroys the accessibility system. Removes all elements and listeners. */
    destroy(): void;
    /**
     * Enables or disables the accessibility system.
     * @param enabled - Whether to enable or disable accessibility.
     */
    setAccessibilityEnabled(enabled: boolean): void;
}
