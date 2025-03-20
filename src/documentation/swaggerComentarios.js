/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 *   schemas:
 *     Candidato:
 *       type: object
 *       required:
 *         - nome
 *         - cpf
 *         - numeroContato
 *         - endereco
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: "Ana Souza"
 *         cpf:
 *           type: string
 *           example: "12345678901"
 *         ativo:
 *           type: boolean
 *           default: true
 *         numeroContato:
 *           type: string
 *           example: "11987654321"
 *         endereco:
 *           type: string
 *           example: "Av. Paulista, 1000 - São Paulo/SP"
 */

/**
 * @swagger
 * tags:
 *   - name: Candidato
 *     description: Gerenciamento de candidatos
 */

/**
 * @swagger
 * /candidato:
 *   get:
 *     summary: Lista todos os candidatos
 *     tags: [Candidato]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de candidatos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Candidato'
 *       401:
 *         description: Token inválido ou ausente
 *       403:
 *         description: Acesso negado (sem permissão)
 */

/**
 * @swagger
 * /candidato:
 *   post:
 *     summary: Cadastra um novo candidato
 *     tags: [Candidato]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Candidato'
 *     responses:
 *       201:
 *         description: Candidato criado com sucesso
 *       400:
 *         description: Dados inválidos (ex CPF já cadastrado)
 */

/**
 * @swagger
 * /candidato/{id}:
 *   get:
 *     summary: Busca um candidato por ID
 *     tags: [Candidato]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do candidato
 *     responses:
 *       200:
 *         description: Dados do candidato
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidato'
 *       401:
 *         description: Token inválido
 *       404:
 *         description: Candidato não encontrado
 */

/**
 * @swagger
 * /candidato:
 *   put:
 *     summary: Atualiza dados do candidato
 *     tags: [Candidato]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               numeroContato:
 *                 type: string
 *                 example: "11999998888"
 *               endereco:
 *                 type: string
 *                 example: "Nova Rua, 456"
 *     responses:
 *       200:
 *         description: Dados atualizados
 *       403:
 *         description: Permissão insuficiente
 *       404:
 *         description: Candidato não encontrado
 */

/**
 * @swagger
 * /candidato/{id}:
 *   delete:
 *     summary: Remove um candidato
 *     tags: [Candidato]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Candidato excluído
 *       401:
 *         description: Token inválido
 *       403:
 *         description: Permissão negada
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Empresa:
 *       type: object
 *       required:
 *         - cnpj
 *         - nomeEmpresa
 *         - numeroContato
 *         - endereco
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           example: 1
 *         cnpj:
 *           type: string
 *           pattern: '^\d{14}$'
 *           description: CNPJ com 14 dígitos (sem pontuação)
 *           example: "12345678000199"
 *         nomeEmpresa:
 *           type: string
 *           example: "Tech Solutions Ltda"
 *         ativo:
 *           type: boolean
 *           default: true
 *         numeroContato:
 *           type: string
 *           example: "1133334444"
 *         endereco:
 *           type: string
 *           example: "Av. das Nações, 2000 - São Paulo/SP"
 * 
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   - name: Empresa
 *     description: Gestão de empresas cadastradas
 */

/**
 * @swagger
 * /empresas:
 *   get:
 *     summary: Lista todas as empresas
 *     tags: [Empresa]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de empresas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empresa'
 *       401:
 *         description: Token inválido ou ausente
 *       403:
 *         description: Acesso restrito a administradores
 */

/**
 * @swagger
 * /empresas:
 *   post:
 *     summary: Cadastra uma nova empresa
 *     tags: [Empresa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empresa'
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       400:
 *         description: Erro de validação (CNPJ inválido ou dados faltando)
 *       409:
 *         description: CNPJ já cadastrado
 */

/**
 * @swagger
 * /empresas/{id}:
 *   delete:
 *     summary: Exclui uma empresa
 *     tags: [Empresa]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da empresa
 *     responses:
 *       204:
 *         description: Empresa excluída com sucesso
 *       401:
 *         description: Token inválido
 *       403:
 *         description: Acesso permitido apenas para admin ou própria empresa
 *       404:
 *         description: Empresa não encontrada
 */

/**
 * @swagger
 * /empresas:
 *   put:
 *     summary: Atualiza dados da empresa
 *     tags: [Empresa]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               nomeEmpresa:
 *                 type: string
 *                 example: "Novo Nome Empresa"
 *               numeroContato:
 *                 type: string
 *                 example: "11999998888"
 *               endereco:
 *                 type: string
 *                 example: "Novo endereço, 123"
 *     responses:
 *       200:
 *         description: Dados atualizados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       403:
 *         description: Permissão negada para edição
 *       404:
 *         description: Empresa não encontrada
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Vaga:
 *       type: object
 *       required:
 *         - area
 *         - dataVencimento
 *         - descricao
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         area:
 *           type: string
 *           example: "Tecnologia"
 *         dataPublicacao:
 *           type: string
 *           format: date-time
 *           example: "2023-10-25T10:00:00Z"
 *         dataVencimento:
 *           type: string
 *           format: date
 *           example: "2023-12-31"
 *         ativo:
 *           type: boolean
 *           default: true
 *         descricao:
 *           type: string
 *           example: "Desenvolvedor FullStack com experiência em Node.js e React"
 * 
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   - name: Vaga
 *     description: Gerenciamento de vagas de emprego
 */

/**
 * @swagger
 * /vaga:
 *   get:
 *     summary: Lista todas as vagas ativas
 *     tags: [Vaga]
 *     responses:
 *       200:
 *         description: Lista de vagas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vaga'
 */

/**
 * @swagger
 * /vaga:
 *   post:
 *     summary: Cria uma nova vaga
 *     tags: [Vaga]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vaga'
 *     responses:
 *       201:
 *         description: Vaga criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vaga'
 *       400:
 *         description: Dados inválidos
 *       403:
 *         description: Acesso não autorizado
 */

/**
 * @swagger
 * /vaga/{id}:
 *   delete:
 *     summary: Remove uma vaga pelo ID
 *     tags: [Vaga]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da vaga
 *     responses:
 *       204:
 *         description: Vaga removida com sucesso
 *       403:
 *         description: Permissão negada
 *       404:
 *         description: Vaga não encontrada
 */

/**
 * @swagger
 * /vaga:
 *   put:
 *     summary: Atualiza uma vaga existente
 *     tags: [Vaga]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               dataVencimento:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-31"
 *               descricao:
 *                 type: string
 *                 example: "Nova descrição atualizada"
 *               area:
 *                 type: string
 *                 example: "Marketing Digital"
 *     responses:
 *       200:
 *         description: Vaga atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vaga'
 *       403:
 *         description: Permissão insuficiente
 *       404:
 *         description: Vaga não encontrada
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *         - tipoUsuario
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         email:
 *           type: string
 *           format: email
 *           example: "admin@workfacil.com"
 *         ativo:
 *           type: boolean
 *           default: true
 *         tipoUsuario:
 *           type: string
 *           enum: [empresa, candidato, admin]
 *           example: "admin"
 * 
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           example: "user@example.com"
 *         senha:
 *           type: string
 *           example: "Senha@123"
 * 
 *     NovaSenha:
 *       type: object
 *       required:
 *         - tokenSenha
 *         - novaSenha
 *       properties:
 *         tokenSenha:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         novaSenha:
 *           type: string
 *           example: "NovaSenha@123"
 * 
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   - name: Usuario
 *     description: Autenticação e gestão de usuários
 */

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Realiza login do usuário
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciais inválidas
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Lista todos os usuários (apenas admin)
 *     tags: [Usuario]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       403:
 *         description: Acesso negado
 */

/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     summary: Busca usuário por ID
 *     tags: [Usuario]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /usuario/{id}/candidato:
 *   get:
 *     summary: Busca candidato vinculado ao usuário
 *     tags: [Usuario]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do candidato
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidato'
 *       403:
 *         description: Acesso negado
 */

/**
 * @swagger
 * /usuario/{id}/empresa:
 *   get:
 *     summary: Busca empresa vinculada ao usuário
 *     tags: [Usuario]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados da empresa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       403:
 *         description: Acesso negado
 */

/**
 * @swagger
 * /usuario/recuperarSenha:
 *   post:
 *     summary: Solicita recuperação de senha
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *     responses:
 *       200:
 *         description: E-mail de recuperação enviado
 *       404:
 *         description: E-mail não cadastrado
 */

/**
 * @swagger
 * /usuario/novaSenha:
 *   post:
 *     summary: Define nova senha com token de recuperação
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NovaSenha'
 *     responses:
 *       200:
 *         description: Senha atualizada com sucesso
 *       400:
 *         description: Token inválido ou expirado
 */