export class PostAPIDocs {
  /**
   * @code writer 남혜민
   * @description Post api의 Swagger Docs
   */
  // create
  static CreateOperation() {
    return {
      summary: '게시글 작성 API',
      description: '게시글을 작성합니다.',
    };
  }

  // read List
  static GetListOperation() {
    return {
      summary: '게시글 전체 리스트 조회 API',
      description: '게시글 전체 리스트를 조회합니다.',
    };
  }

  // read by id
  static GetByIdOperation() {
    return {
      summary: '게시글 상세 조회 API',
      description: '특정 게시글을 상세 조회합니다.',
    };
  }

  // update
  static UpdateOperation() {
    return {
      summary: '게시글 수정 API',
      description: '게시글을 수정합니다.',
    };
  }

  // delete
  static DeleteByIdOperation() {
    return {
      summary: '게시글 삭제 API',
      description: '게시글을 삭제합니다.',
    };
  }
}
