import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UsersService } from "../../services/users/users.service";
import { CreateUserDto } from "../../dtos/CreateUser.dto";
import { UpdateUserDto } from "../../dtos/UpdateUser.dto";
import { CreateUserProfileDto } from "../../dtos/CreateUserProfile.dto";
import { CreatePostDto } from "../../dtos/createPost.dto";

@Controller("users")
export class UsersController {

  constructor(private userService: UsersService) {
  }

  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  @Post()
  createUsers(@Body() createUseDto: CreateUserDto) {
    return this.userService.createUser(createUseDto);
  }

  @Put(':id')
  async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }

  @Post(':id/profiles')
  createUserProfile(@Param('id') id: number, @Body() createUserProfile: CreateUserProfileDto) {
    return this.userService.createUserProfile(id, createUserProfile)
  }

  @Post(':id/posts')
  createUserPost(@Param('id', ParseIntPipe) id: number, @Body() createUserPostDto: CreatePostDto) {
    return this.userService.createUserPost(id, createUserPostDto);
  }

}
