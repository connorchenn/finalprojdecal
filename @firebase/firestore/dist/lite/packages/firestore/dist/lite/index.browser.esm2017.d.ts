/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an aggregation that can be performed by Firestore.
 */
declare class Dn {
    /**
     * Create a new AggregateField<T>
     * @param _aggregateType Specifies the type of aggregation operation to perform.
     * @param _internalFieldPath Optionally specifies the field that is aggregated.
     * @internal
     */
    constructor(t: string | undefined, e: any);
    _aggregateType: string;
    _internalFieldPath: any;
    /** A type string to uniquely identify instances of this class. */
    type: string;
}
/**
 * The results of executing an aggregation query.
 */ declare class Nn {
    /** @hideconstructor */
    constructor(t: any, e: any, n: any);
    _userDataWriter: any;
    _data: any;
    /** A type string to uniquely identify instances of this class. */
    type: string;
    query: any;
    /**
     * Returns the results of the aggregations performed over the underlying
     * query.
     *
     * The keys of the returned object will be the same as those of the
     * `AggregateSpec` object specified to the aggregation method, and the values
     * will be the corresponding aggregation result.
     *
     * @returns The results of the aggregations performed over the underlying
     * query.
     */ data(): any;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing an array of bytes.
 */ declare class Ln {
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */ static fromBase64String(t: any): Ln;
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */ static fromUint8Array(t: any): Ln;
    /** @hideconstructor */
    constructor(t: any);
    _byteString: any;
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */ toBase64(): any;
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */ toUint8Array(): any;
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */ toString(): string;
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */ isEqual(t: any): any;
}
/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link (query:1)}).
 */ declare class Sn extends xn {
    _path: any;
    /** The collection's identifier. */ get id(): any;
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */ get path(): any;
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */ get parent(): Fn | null;
    withConverter(t: any): Sn;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ declare class Fn {
    /** @hideconstructor */
    constructor(t: any, e: any, n: any);
    converter: any;
    _key: any;
    /** The type of this Firestore reference. */
    type: string;
    firestore: any;
    get _path(): any;
    /**
     * The document's identifier within its collection.
     */ get id(): any;
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */ get path(): any;
    /**
     * The collection this `DocumentReference` belongs to.
     */ get parent(): Sn;
    withConverter(t: any): Fn;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ declare class yr {
    /** @hideconstructor protected */
    constructor(t: any, e: any, n: any, r: any, s: any);
    _firestore: any;
    _userDataWriter: any;
    _key: any;
    _document: any;
    _converter: any;
    /** Property of the `DocumentSnapshot` that provides the document's ID. */ get id(): any;
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */ get ref(): Fn;
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */ exists(): boolean;
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */ data(): any;
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    get(t: any): any;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ declare class Un {
    /**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t: any[]);
    _internalPath: nt;
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */ isEqual(t: any): boolean;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ declare class Bn {
    /**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */
    constructor(t: any);
    _methodName: any;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */ declare class Tn {
    /** @hideconstructor */
    constructor(t: any, e: any, n: any, r: any);
    _authCredentials: any;
    _appCheckCredentials: any;
    _databaseId: any;
    _app: any;
    /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    type: string;
    _persistenceKey: string;
    _settings: In;
    _settingsFrozen: boolean;
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */ get app(): any;
    get _initialized(): boolean;
    get _terminated(): boolean;
    _setSettings(t: any): void;
    _getSettings(): In;
    _freezeSettings(): In;
    _delete(): Promise<void>;
    _terminateTask: Promise<void> | undefined;
    /** Returns a JSON-serializable representation of this `Firestore` instance. */ toJSON(): {
        app: any;
        databaseId: any;
        settings: In;
    };
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */ _terminate(): Promise<void>;
}
/** An error returned by a Firestore operation. */ declare class U extends c {
    /** @hideconstructor */
    constructor(t: any, e: any);
    code: any;
    message: any;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ declare class zn {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t: any, e: any);
    _lat: any;
    _long: any;
    /**
     * The latitude of this `GeoPoint` instance.
     */ get latitude(): any;
    /**
     * The longitude of this `GeoPoint` instance.
     */ get longitude(): any;
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */ isEqual(t: any): boolean;
    /** Returns a JSON-serializable representation of this GeoPoint. */ toJSON(): {
        latitude: any;
        longitude: any;
    };
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */ _compareTo(t: any): 0 | 1 | -1;
}
/**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ declare class xn {
    /** @hideconstructor protected */
    constructor(t: any, e: any, n: any);
    converter: any;
    _query: any;
    /** The type of this Firestore reference. */
    type: string;
    firestore: any;
    withConverter(t: any): xn;
}
/**
 * A `QueryCompositeFilterConstraint` is used to narrow the set of documents
 * returned by a Firestore query by performing the logical OR or AND of multiple
 * {@link QueryFieldFilterConstraint}s or {@link QueryCompositeFilterConstraint}s.
 * `QueryCompositeFilterConstraint`s are created by invoking {@link or} or
 * {@link and} and can then be passed to {@link (query:1)} to create a new query
 * instance that also contains the `QueryCompositeFilterConstraint`.
 */ declare class Pr extends Er {
    static _create(t: any, e: any): Pr;
    /**
     * @internal
     */
    constructor(t: any, e: any);
    type: any;
    _queryConstraints: any;
    _parse(t: any): any;
    _apply(t: any): any;
    _getQueryConstraints(): any;
    _getOperator(): "and" | "or";
}
/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
 * (endBefore:1)}, {@link (endAt:1)}, {@link limit}, {@link limitToLast} and
 * can then be passed to {@link (query:1)} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ declare class Ar extends Er {
}
/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ declare class gr extends yr {
}
/**
 * A `QueryEndAtConstraint` is used to exclude documents from the end of a
 * result set returned by a Firestore query.
 * `QueryEndAtConstraint`s are created by invoking {@link (endAt:1)} or
 * {@link (endBefore:1)} and can then be passed to {@link (query:1)} to create a new
 * query instance that also contains this `QueryEndAtConstraint`.
 */ declare class Cr extends Ar {
    static _create(t: any, e: any, n: any): Cr;
    /**
     * @internal
     */
    constructor(t: any, e: any, n: any);
    type: any;
    _docOrFields: any;
    _inclusive: any;
    _apply(t: any): xn;
}
/**
 * A `QueryFieldFilterConstraint` is used to narrow the set of documents returned by
 * a Firestore query by filtering on one or more document fields.
 * `QueryFieldFilterConstraint`s are created by invoking {@link where} and can then
 * be passed to {@link (query:1)} to create a new query instance that also contains
 * this `QueryFieldFilterConstraint`.
 */ declare class Tr extends Ar {
    static _create(t: any, e: any, n: any): Tr;
    /**
     * @internal
     */
    constructor(t: any, e: any, n: any);
    _field: any;
    _op: any;
    _value: any;
    /** The type of this query constraint */
    type: string;
    _apply(t: any): xn;
    _parse(t: any): Xt | re | ae;
}
/**
 * A `QueryLimitConstraint` is used to limit the number of documents returned by
 * a Firestore query.
 * `QueryLimitConstraint`s are created by invoking {@link limit} or
 * {@link limitToLast} and can then be passed to {@link (query:1)} to create a new
 * query instance that also contains this `QueryLimitConstraint`.
 */ declare class Fr extends Ar {
    static _create(t: any, e: any, n: any): Fr;
    /**
     * @internal
     */
    constructor(t: any, e: any, n: any);
    type: any;
    _limit: any;
    _limitType: any;
    _apply(t: any): xn;
}
/**
 * A `QueryOrderByConstraint` is used to sort the set of documents returned by a
 * Firestore query. `QueryOrderByConstraint`s are created by invoking
 * {@link orderBy} and can then be passed to {@link (query:1)} to create a new query
 * instance that also contains this `QueryOrderByConstraint`.
 *
 * Note: Documents that do not contain the orderBy field will not be present in
 * the query result.
 */ declare class Dr extends Ar {
    static _create(t: any, e: any): Dr;
    /**
     * @internal
     */
    constructor(t: any, e: any);
    _field: any;
    _direction: any;
    /** The type of this query constraint */
    type: string;
    _apply(t: any): xn;
}
/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */ declare class _r {
    /** @hideconstructor */
    constructor(t: any, e: any);
    _docs: any;
    query: any;
    /** An array of all the documents in the `QuerySnapshot`. */ get docs(): any[];
    /** The number of documents in the `QuerySnapshot`. */ get size(): number;
    /** True if there are no documents in the `QuerySnapshot`. */ get empty(): boolean;
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */ forEach(t: any, e: any): void;
}
/**
 * A `QueryStartAtConstraint` is used to exclude documents from the start of a
 * result set returned by a Firestore query.
 * `QueryStartAtConstraint`s are created by invoking {@link (startAt:1)} or
 * {@link (startAfter:1)} and can then be passed to {@link (query:1)} to create a
 * new query instance that also contains this `QueryStartAtConstraint`.
 */ declare class qr extends Ar {
    static _create(t: any, e: any, n: any): qr;
    /**
     * @internal
     */
    constructor(t: any, e: any, n: any);
    type: any;
    _docOrFields: any;
    _inclusive: any;
    _apply(t: any): xn;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */
declare class St {
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */ static now(): St;
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */ static fromDate(t: any): St;
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */ static fromMillis(t: any): St;
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    constructor(t: any, e: any);
    seconds: any;
    nanoseconds: any;
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */ toDate(): Date;
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */ toMillis(): number;
    _compareTo(t: any): 0 | 1 | -1;
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */ isEqual(t: any): boolean;
    /** Returns a textual representation of this `Timestamp`. */ toString(): string;
    /** Returns a JSON-serializable representation of this `Timestamp`. */ toJSON(): {
        seconds: any;
        nanoseconds: any;
    };
    /**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */ valueOf(): string;
}
declare class Es {
    /** @hideconstructor */
    constructor(t: any, e: any);
    _firestore: any;
    _transaction: any;
    _dataReader: Hn;
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */ get(t: any): any;
    set(t: any, e: any, n: any): Es;
    update(t: any, e: any, n: any, ...r: any[]): Es;
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */ delete(t: any): Es;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */ declare class ds {
    /** @hideconstructor */
    constructor(t: any, e: any);
    _firestore: any;
    _commitHandler: any;
    _mutations: any[];
    _committed: boolean;
    _dataReader: Hn;
    set(t: any, e: any, n: any): ds;
    update(t: any, e: any, n: any, ...r: any[]): ds;
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */ delete(t: any): ds;
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A `Promise` resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */ commit(): any;
    _verifyNotCommitted(): void;
}
/**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * The result of this write will only be reflected in document reads that occur
 * after the returned promise resolves. If the client is offline, the
 * write fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @throws Error - If the provided input is not a valid Firestore document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend.
 */ declare function ts(t: any, e: any): Promise<Fn>;
/**
 * Compares two 'AggregateField` instances for equality.
 *
 * @param left Compare this AggregateField to the `right`.
 * @param right Compare this AggregateField to the `left`.
 * @internal TODO (sum/avg) remove when public
 */ declare function os(t: any, e: any): boolean;
/**
 * Compares two `AggregateQuerySnapshot` instances for equality.
 *
 * Two `AggregateQuerySnapshot` instances are considered "equal" if they have
 * underlying queries that compare equal, and the same data.
 *
 * @param left - The first `AggregateQuerySnapshot` to compare.
 * @param right - The second `AggregateQuerySnapshot` to compare.
 *
 * @returns `true` if the objects are "equal", as defined above, or `false`
 * otherwise.
 */ declare function us(t: any, e: any): boolean;
/**
 * Creates a new {@link QueryCompositeFilterConstraint} that is a conjunction of
 * the given filter constraints. A conjunction filter includes a document if it
 * satisfies all of the given filters.
 *
 * @param queryConstraints - Optional. The list of
 * {@link QueryFilterConstraint}s to perform a conjunction for. These must be
 * created with calls to {@link where}, {@link or}, or {@link and}.
 * @returns The newly created {@link QueryCompositeFilterConstraint}.
 */ declare function $r(...t: any[]): Pr;
/**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc:1} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ declare function ls(...t: any[]): rr;
/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */ declare function hs(...t: any[]): nr;
/**
 * Create an AggregateField object that can be used to compute the average of
 * a specified field over a range of documents in the result set of a query.
 * @param field Specifies the field to average across the result set.
 * @internal TODO (sum/avg) remove when public
 */ declare function ss(t: any): Dn;
declare function qn(t: any, e: any, ...n: any[]): Sn;
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root `Firestore` instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ declare function On(t: any, e: any): xn;
/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The `Firestore` instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */ declare function Vn(t: any, e: any, n: any, r?: {}): void;
/**
 * Create an AggregateField object that can be used to compute the count of
 * documents in the result set of a query.
 * @internal TODO (sum/avg) remove when public
 */ declare function is(): Dn;
/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * The deletion will only be reflected in document reads that occur after the
 * returned promise resolves. If the client is offline, the
 * delete fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @param reference - A reference to the document to delete.
 * @returns A `Promise` resolved once the document has been successfully
 * deleted from the backend.
 */ declare function Xr(t: any): Promise<void>;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
 * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
 */ declare function cs(): Xn;
declare function kn(t: any, e: any, ...n: any[]): Fn;
/**
 * Returns a special sentinel `FieldPath` to refer to the ID of a document.
 * It can be used in queries to sort or filter by the document ID.
 */ declare function jn(): Un;
declare function Lr(...t: any[]): Cr;
declare function Mr(...t: any[]): Cr;
/**
 * Calculates the specified aggregations over the documents in the result
 * set of the given query, without actually downloading the documents.
 *
 * Using this function to perform aggregations is efficient because only the
 * final aggregation values, not the documents' data, is downloaded. This
 * function can even perform aggregations of the documents if the result set
 * would be prohibitively large to download entirely (e.g. thousands of documents).
 *
 * @param query The query whose result set to aggregate over.
 * @param aggregateSpec An `AggregateSpec` object that specifies the aggregates
 * to perform over the result set. The AggregateSpec specifies aliases for each
 * aggregate, which can be used to retrieve the aggregate result.
 * @example
 * ```typescript
 * const aggregateSnapshot = await getAggregate(query, {
 *   countOfDocs: count(),
 *   totalHours: sum('hours'),
 *   averageScore: average('score')
 * });
 *
 * const countOfDocs: number = aggregateSnapshot.data().countOfDocs;
 * const totalHours: number = aggregateSnapshot.data().totalHours;
 * const averageScore: number | null = aggregateSnapshot.data().averageScore;
 * ```
 * @internal TODO (sum/avg) remove when public
 */ declare function ns(t: any, e: any): Promise<Nn>;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Calculates the number of documents in the result set of the given query,
 * without actually downloading the documents.
 *
 * Using this function to count the documents is efficient because only the
 * final count, not the documents' data, is downloaded. This function can even
 * count the documents if the result set would be prohibitively large to
 * download entirely (e.g. thousands of documents).
 *
 * @param query - The query whose result set size to calculate.
 * @returns A Promise that will be resolved with the count; the count can be
 * retrieved from `snapshot.data().count`, where `snapshot` is the
 * `AggregateQuerySnapshot` to which the returned Promise resolves.
 */ declare function es(t: any): Promise<Nn>;
/**
 * Reads the document referred to by the specified document reference.
 *
 * All documents are directly fetched from the server, even if the document was
 * previously read or modified. Recent modifications are only reflected in the
 * retrieved `DocumentSnapshot` if they have already been applied by the
 * backend. If the client is offline, the read fails. If you like to use
 * caching or see local modifications, please use the full Firestore SDK.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the current
 * document contents.
 */ declare function Yr(t: any): Promise<yr>;
/**
 * Executes the query and returns the results as a {@link QuerySnapshot}.
 *
 * All queries are executed directly by the server, even if the the query was
 * previously executed. Recent modifications are only reflected in the retrieved
 * results if they have already been applied by the backend. If the client is
 * offline, the operation fails. To see previously cached result and local
 * modifications, use the full Firestore SDK.
 *
 * @param query - The `Query` to execute.
 * @returns A Promise that will be resolved with the results of the query.
 */ declare function Hr(t: any): Promise<_r>;
declare function Pn(e: any, n: any): import("../../lite").Firestore;
/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
 * the given value.
 *
 * If either the operand or the current field value uses floating point
 * precision, all arithmetic follows IEEE 754 semantics. If both values are
 * integers, values outside of JavaScript's safe number range
 * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
 * precision loss. Furthermore, once processed by the Firestore backend, all
 * integer operations are capped between -2^63 and 2^63-1.
 *
 * If the current field value is not of type `number`, or if the field does not
 * yet exist, the transformation sets the field to the given value.
 *
 * @param n - The value to increment by.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ declare function fs(t: any): sr;
declare function Rn(t: any, e: any, n: any): import("../../lite").Firestore;
/**
 * Creates a {@link QueryLimitConstraint} that only returns the first matching
 * documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link QueryLimitConstraint}.
 */ declare function xr(t: any): Fr;
/**
 * Creates a {@link QueryLimitConstraint} that only returns the last matching
 * documents.
 *
 * You must specify at least one `orderBy` clause for `limitToLast` queries,
 * otherwise an exception will be thrown during execution.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link QueryLimitConstraint}.
 */ declare function Sr(t: any): Fr;
/**
 * Creates a new {@link QueryCompositeFilterConstraint} that is a disjunction of
 * the given filter constraints. A disjunction filter includes a document if it
 * satisfies any of the given filters.
 *
 * @param queryConstraints - Optional. The list of
 * {@link QueryFilterConstraint}s to perform a disjunction for. These must be
 * created with calls to {@link where}, {@link or}, or {@link and}.
 * @returns The newly created {@link QueryCompositeFilterConstraint}.
 */ declare function Vr(...t: any[]): Pr;
/**
 * Creates a {@link QueryOrderByConstraint} that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * Note: Documents that do not contain the specified field will not be present
 * in the query result.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created {@link QueryOrderByConstraint}.
 */ declare function Nr(t: any, e?: string): Dr;
declare function Ir(t: any, e: any, ...n: any[]): any;
/**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ declare function Mn(t: any, e: any): boolean;
/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ declare function Cn(t: any, e: any): boolean;
/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @param options - An options object to configure maximum number of attempts to
 * commit.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */ declare function As(t: any, e: any, n: any): Promise<any>;
/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */ declare function as(): er;
declare function Zr(t: any, e: any, n: any): Promise<void>;
/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ declare function p(t: any): void;
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ declare function vr(t: any, e: any): any;
declare function kr(...t: any[]): qr;
declare function Or(...t: any[]): qr;
declare function rs(t: any): Dn;
/**
 * Terminates the provided `Firestore` instance.
 *
 * After calling `terminate()` only the `clearIndexedDbPersistence()` functions
 * may be used. Any other function will throw a `FirestoreError`. Termination
 * does not cancel any pending writes, and any promises that are awaiting a
 * response from the server will not be resolved.
 *
 * To restart after termination, create a new instance of `Firestore` with
 * {@link (getFirestore:1)}.
 *
 * Note: Under normal circumstances, calling `terminate()` is not required. This
 * function is useful only when you want to force this instance to release all of
 * its resources or in combination with {@link clearIndexedDbPersistence} to
 * ensure that all local state is destroyed between test runs.
 *
 * @param firestore - The `Firestore` instance to terminate.
 * @returns A `Promise` that is resolved when the instance has been successfully
 * terminated.
 */ declare function $n(t: any): any;
declare function Jr(t: any, e: any, n: any, ...r: any[]): Promise<void>;
/**
 * Creates a {@link QueryFieldFilterConstraint} that enforces that documents
 * must contain the specified field and that the value should satisfy the
 * relation constraint provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created {@link QueryFieldFilterConstraint}.
 */ declare function Rr(t: any, e: any, n: any): Tr;
/**
 * Creates a write batch, used for performing multiple writes as a single
 * atomic operation. The maximum number of writes allowed in a single WriteBatch
 * is 500.
 *
 * The result of these writes will only be reflected in document reads that
 * occur after the returned promise resolves. If the client is offline, the
 * write fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @returns A `WriteBatch` that can be used to atomically execute multiple
 * writes.
 */ declare function ms(t: any): ds;
/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */ declare class nt extends X {
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */ static isValidIdentifier(t: any): boolean;
    /**
     * The field designating the key of a document.
     */ static keyField(): nt;
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */ static fromServerFormat(t: any): nt;
    static emptyPath(): nt;
    construct(t: any, e: any, n: any): nt;
    canonicalString(): any;
    toString(): any;
    /**
     * Returns true if this field references the key of a document.
     */ isKeyField(): boolean;
}
/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
declare class In {
    constructor(t: any);
    host: any;
    ssl: any;
    credentials: any;
    ignoreUndefinedProperties: boolean;
    cache: any;
    cacheSizeBytes: any;
    experimentalForceLongPolling: boolean;
    experimentalAutoDetectLongPolling: boolean;
    useFetchStreams: boolean;
    isEqual(t: any): boolean;
}
import { FirebaseError as c } from "@firebase/util/dist/src/errors";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An `AppliableConstraint` is an abstraction of a constraint that can be applied
 * to a Firestore query.
 */
declare class Er {
}
declare class Xt extends Jt {
    /**
     * Creates a filter based on the provided arguments.
     */ static create(t: any, e: any, n: any): Xt | re | ae;
    static createKeyFieldInFilter(t: any, e: any, n: any): re | se;
    constructor(t: any, e: any, n: any);
    field: any;
    op: any;
    value: any;
    matches(t: any): boolean | void;
    matchesComparison(t: any): boolean | void;
    isInequality(): boolean;
    getFlattenedFilters(): Xt[];
    getFilters(): Xt[];
    getFirstInequalityField(): any;
}
/** Filter that matches on key fields within an array. */ declare class re extends Xt {
    constructor(t: any, e: any);
    keys: any;
    matches(t: any): any;
}
/** A Filter that implements the array-contains-any operator. */ declare class ae extends Xt {
    constructor(t: any, e: any);
    matches(t: any): any;
}
/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ declare class Hn {
    constructor(t: any, e: any, n: any);
    databaseId: any;
    ignoreUndefinedProperties: any;
    serializer: any;
    /** Creates a new top-level parse context. */ lt(t: any, e: any, n: any, r?: boolean): Yn;
}
declare class rr extends Bn {
    constructor(t: any, e: any);
    ft: any;
    _toFieldTransform(t: any): ke;
    isEqual(t: any): boolean;
}
declare class nr extends Bn {
    constructor(t: any, e: any);
    ft: any;
    _toFieldTransform(t: any): ke;
    isEqual(t: any): boolean;
}
declare class Xn extends Bn {
    _toFieldTransform(t: any): null;
    isEqual(t: any): boolean;
}
declare class sr extends Bn {
    constructor(t: any, e: any);
    dt: any;
    _toFieldTransform(t: any): ke;
    isEqual(t: any): boolean;
}
declare class er extends Bn {
    _toFieldTransform(t: any): ke;
    isEqual(t: any): boolean;
}
/**
 * Path represents an ordered sequence of string segments.
 */
declare class X {
    static comparator(t: any, e: any): 0 | 1 | -1;
    constructor(t: any, e: any, n: any);
    segments: any;
    offset: any;
    len: any;
    get length(): any;
    isEqual(t: any): boolean;
    child(t: any): any;
    /** The index of one past the last segment of the path. */ limit(): any;
    popFirst(t: any): any;
    popLast(): any;
    firstSegment(): any;
    lastSegment(): any;
    get(t: any): any;
    isEmpty(): boolean;
    isPrefixOf(t: any): boolean;
    isImmediateParentOf(t: any): boolean;
    forEach(t: any): void;
    toArray(): any;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare class Jt {
}
/** Filter that matches on key fields not present within an array. */ declare class se extends Xt {
    constructor(t: any, e: any);
    keys: any;
    matches(t: any): boolean;
}
/** A "context" object passed around while parsing user data. */ declare class Yn {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(t: any, e: any, n: any, r: any, s: any, i: any);
    settings: any;
    databaseId: any;
    serializer: any;
    ignoreUndefinedProperties: any;
    fieldTransforms: any;
    fieldMask: any;
    get path(): any;
    get et(): any;
    /** Returns a new context with the specified settings overwritten. */ nt(t: any): Yn;
    rt(t: any): Yn;
    ot(t: any): Yn;
    ut(t: any): Yn;
    ct(t: any): U;
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ contains(t: any): boolean;
    tt(): void;
    it(t: any): void;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A field path and the TransformOperation to perform upon it. */ declare class ke {
    constructor(t: any, e: any);
    field: any;
    transform: any;
}
export { Dn as AggregateField, Nn as AggregateQuerySnapshot, Ln as Bytes, Sn as CollectionReference, Fn as DocumentReference, yr as DocumentSnapshot, Un as FieldPath, Bn as FieldValue, Tn as Firestore, U as FirestoreError, zn as GeoPoint, xn as Query, Pr as QueryCompositeFilterConstraint, Ar as QueryConstraint, gr as QueryDocumentSnapshot, Cr as QueryEndAtConstraint, Tr as QueryFieldFilterConstraint, Fr as QueryLimitConstraint, Dr as QueryOrderByConstraint, _r as QuerySnapshot, qr as QueryStartAtConstraint, St as Timestamp, Es as Transaction, ds as WriteBatch, ts as addDoc, os as aggregateFieldEqual, us as aggregateQuerySnapshotEqual, $r as and, ls as arrayRemove, hs as arrayUnion, ss as average, qn as collection, On as collectionGroup, Vn as connectFirestoreEmulator, is as count, Xr as deleteDoc, cs as deleteField, kn as doc, jn as documentId, Lr as endAt, Mr as endBefore, ns as getAggregate, es as getCount, Yr as getDoc, Hr as getDocs, Pn as getFirestore, fs as increment, Rn as initializeFirestore, xr as limit, Sr as limitToLast, Vr as or, Nr as orderBy, Ir as query, Mn as queryEqual, Cn as refEqual, As as runTransaction, as as serverTimestamp, Zr as setDoc, p as setLogLevel, vr as snapshotEqual, kr as startAfter, Or as startAt, rs as sum, $n as terminate, Jr as updateDoc, Rr as where, ms as writeBatch };
