import { FederatedMouseEvent } from './FederatedMouseEvent';
/**
 * A {@link FederatedEvent} for pointer events.
 * @memberof events
 */
export declare class FederatedPointerEvent extends FederatedMouseEvent implements PointerEvent {
    /**
     * The unique identifier of the pointer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId}
     */
    pointerId: number;
    /**
     * The width of the pointer's contact along the x-axis, measured in CSS pixels.
     * radiusX of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
     */
    width: number;
    /**
     * The angle in radians of a pointer or stylus measuring the vertical angle between
     * the device's surface to the pointer or stylus.
     * A stylus at 0 degrees would be directly parallel whereas at π/2 degrees it would be perpendicular.
     * @see https://developer.mozilla.org/docs/Web/API/PointerEvent/altitudeAngle)
     */
    altitudeAngle: number;
    /**
     * The angle in radians of a pointer or stylus measuring an arc from the X axis of the device to
     * the pointer or stylus projected onto the screen's plane.
     * A stylus at 0 degrees would be pointing to the "0 o'clock" whereas at π/2 degrees it would be pointing at "6 o'clock".
     * @see https://developer.mozilla.org/docs/Web/API/PointerEvent/azimuthAngle)
     */
    azimuthAngle: number;
    /**
     * The height of the pointer's contact along the y-axis, measured in CSS pixels.
     * radiusY of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
     */
    height: number;
    /**
     * Indicates whether or not the pointer device that created the event is the primary pointer.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
     */
    isPrimary: boolean;
    /**
     * The type of pointer that triggered the event.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
     */
    pointerType: string;
    /**
     * Pressure applied by the pointing device during the event.
     *s
     * A Touch's force property will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
     */
    pressure: number;
    /**
     * Barrel pressure on a stylus pointer.
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     */
    tangentialPressure: number;
    /**
     * The angle, in degrees, between the pointer device and the screen.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX
     */
    tiltX: number;
    /**
     * The angle, in degrees, between the pointer device and the screen.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY
     */
    tiltY: number;
    /**
     * Twist of a stylus pointer.
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     */
    twist: number;
    /** This is the number of clicks that occurs in 200ms/click of each other. */
    detail: number;
    getCoalescedEvents(): PointerEvent[];
    getPredictedEvents(): PointerEvent[];
}
