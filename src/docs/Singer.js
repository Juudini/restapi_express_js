/**
 * @swagger
 * tags:
 *   - name: Singers
 *     description: Operations related to singers
 *   - name: Swagger
 *     description: Operations related to Swagger documentation
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Singer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Singer's ID
 *         name:
 *           type: string
 *           description: Singer's name
 *         genre:
 *           type: string
 *           description: Singer's genre
 */

/**
 * @swagger
 * /singers:
 *   get:
 *     summary: Get the list of singers
 *     tags:
 *       - Singers
 *     responses:
 *       '200':
 *         description: List of singers successfully retrieved
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /singers/{id}:
 *   get:
 *     summary: Get singer details by ID
 *     tags:
 *       - Singers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Singer's ID
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Singer details successfully retrieved
 *       '404':
 *         description: Singer not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /singers:
 *   post:
 *     summary: Add a new singer
 *     tags:
 *       - Singers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Singer'
 *     responses:
 *       '200':
 *         description: Singer successfully added
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /singers/{id}:
 *   patch:
 *     summary: Update singer details by ID
 *     tags:
 *       - Singers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Singer's ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Singer'
 *     responses:
 *       '200':
 *         description: Singer details successfully updated
 *       '404':
 *         description: Singer not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /singers/{id}:
 *   delete:
 *     summary: Delete a singer by ID
 *     tags:
 *       - Singers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Singer's ID
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Singer successfully deleted
 *       '404':
 *         description: Singer not found
 *       '500':
 *         description: Internal server error
 */
