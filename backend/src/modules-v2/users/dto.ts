export class CreateUserDto {
    wallet_address: string;
    email?: string;
    username: string;
  }
  
  export class UpdateUserDto {
    email?: string;
    username?: string;
    is_active?: boolean;
    two_factor_enabled?: boolean;
  }
  
  export class UserResponseDto {
    user_id: string;
    wallet_address: string;
    email?: string;
    username: string;
    created_at: Date;
    last_login?: Date;
    is_active: boolean;
    two_factor_enabled: boolean;
  }
  